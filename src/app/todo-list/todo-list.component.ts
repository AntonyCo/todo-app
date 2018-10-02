import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos:Todo[];
  
  @Output()
  todoTitleClicked:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleClickOnTitle(todo:Todo){
    this.todoTitleClicked.emit(todo);
  }

  @Output()
  todoToDelete:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleRequestToDeleteTodo(todo:Todo){
    this.todoToDelete.emit(todo);
  }

  @Output()
  todoToCheck:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleRequestToCheckTodo(todo:Todo){
    this.todoToCheck.emit(todo);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
