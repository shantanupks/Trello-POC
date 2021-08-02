import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICard } from 'src/app/model/cards';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  title;
  description;

  constructor(public dialogRef: MatDialogRef<AddCardComponent>,
    public utils: UtilsService) { }

  ngOnInit(): void {
  }

  createCard() {
    let card: ICard;
    card = this.utils.taskBoard.createCard(this.title, this.description);
    this.dialogRef.close(card);
  }

}
