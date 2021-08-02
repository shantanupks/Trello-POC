import { Component, Input, OnInit } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ICard } from "../model/cards";
import { UtilsService } from "../utils.service";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  @Input() listId;
  faClose = faTimes;

  constructor(public utils: UtilsService) { }

  ngOnInit() { }

  dragStart(ev) {
    ev.dataTransfer.setData("cardData", JSON.stringify({ cardId: this.card.id, listId: this.listId }));
  }


  deleteCard() {
    this.utils.taskBoard.deleteCard(this.card.id, this.listId);
    this.utils.updateBoard();
  }
}