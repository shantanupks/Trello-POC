import { Component, OnInit } from '@angular/core';
import { IList } from '../model/lists';
import { TaskBoard } from '../model/TaskBoard';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  taskBoard: TaskBoard;
  lists: IList[] = [];

  constructor(public utils: UtilsService) {
  }

  createBoard(): void {
    this.taskBoard = new TaskBoard();
    this.utils.setBoard(this.taskBoard);
  }

  ngOnInit() {
    this.createBoard();
    this.subscribeToLists();
  }

  subscribeToLists() {
    this.utils.boardSubject.subscribe((x) => {
      this.lists = this.taskBoard.lists;
    });
  }

}