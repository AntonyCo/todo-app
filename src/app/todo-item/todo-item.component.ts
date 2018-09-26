import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;
  
  handleCheckBoxChange(todo:Todo){
    todo.isDone = !todo.isDone;
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
