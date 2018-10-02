import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  @Output()
  todoToAdd:EventEmitter<Todo> = new EventEmitter<Todo>();
  addTodoToContainer(value) {
    const todo:Todo = new Todo(value, false);
    this.todoToAdd.emit(todo);
  }
  
  @Output()
  requestToResetTodos:EventEmitter<string> = new EventEmitter<string>();
  resetTodoList(){
    this.requestToResetTodos.emit();
  }
  constructor() { }
  
  ngOnInit() {
  }
}
