import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;
  
  @Output()
  todoToDelete:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleDeleteTodo(todo:Todo){
    this.todoToDelete.emit(todo);
  }

  @Output()
  todoTitleClicked:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleClickOnTitle(todo){
    this.todoTitleClicked.emit(todo);
  }

  @Output()
  todoToCheck:EventEmitter<Todo> = new EventEmitter<Todo>();
  handleCheckBoxChange(todo:Todo){
    this.todoToCheck.emit(todo);
  }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(changes);
    
    
  }

}
