import { Component, HostListener, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AddCardComponent } from "../dialogs/add-card/add-card.component";
import { ICard } from "../model/cards";
import { IList } from "../model/lists";
import { TaskBoard } from "../model/TaskBoard";
import { UtilsService } from "../utils.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() list: IList;
  @Input() taskBoard: TaskBoard;
  faPlus = faPlusCircle;
  faClose = faTimes;


  constructor(public dialog: MatDialog, public utils: UtilsService) { }


  ngOnInit(): void { }

  deleteList() {
    this.utils.taskBoard.deleteList(this.list.id);
    this.utils.updateBoard();
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    const { cardId, listId } = JSON.parse($event.dataTransfer.getData("cardData"));
    let fromListId = listId;

    this.utils.taskBoard.addCard(cardId, fromListId, this.list.id)
    this.utils.taskBoard.deleteCard(cardId, fromListId);

    // sort lists
    this.utils.taskBoard.sort(this.list.id);
    this.utils.taskBoard.sort(fromListId);

    // publish lists
    this.utils.updateBoard();
  }

  addCard() {
    const dialogRef = this.dialog.open(AddCardComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.list.cards.push(result);
        this.utils.updateBoard();
      }
    });
  }
}
