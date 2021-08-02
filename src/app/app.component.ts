import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AddListComponent } from './dialogs/add-list/add-list.component';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trello-POC';
  faPlus = faPlusCircle;

  constructor(public dialog: MatDialog,
    public utils: UtilsService) {

  }

  addList() {
    const dialogRef = this.dialog.open(AddListComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.utils.updateBoard()
      }
    });
  }


}
