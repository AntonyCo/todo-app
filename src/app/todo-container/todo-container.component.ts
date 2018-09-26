import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Todo[];

  handleTodoToAdd(todo:Todo){
    todo.title != ''? this.todos.unshift(todo): alert('Please enter a title !');
  }

  handleRequestToResetTodos(){
    this.todos = [];
  }
  constructor() { }

  ngOnInit() {
    this.todos = [];
  }
}
