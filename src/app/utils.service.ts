import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IList } from './model/lists';
import { TaskBoard } from './model/TaskBoard';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  boardSubject: Subject<any> = new Subject();
  taskBoard: TaskBoard;

  constructor() {
    this.taskBoard = new TaskBoard();
  }

  setBoard(board) {
    this.taskBoard = board;
  }

  updateBoard() {
    localStorage.setItem('boardData', JSON.stringify(this.taskBoard));
    this.boardSubject.next();
  }

}
