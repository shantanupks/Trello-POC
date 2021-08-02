import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IList } from 'src/app/model/lists';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  title;
  constructor(public dialogRef: MatDialogRef<AddListComponent>,
    public utils: UtilsService) { }

  ngOnInit(): void {
  }

  createList() {
    let list: IList;
    list = this.utils.taskBoard.createList(this.title);
    this.dialogRef.close(list);
  }

}
