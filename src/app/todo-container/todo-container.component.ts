import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoServices } from '../services/TodoServices';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Todo[];
  public todos$ = this.todoServices.todos$ ;
  private todosSubscription;

  handleTodoToAdd(todo:Todo){
    todo.title != ''? this.todoServices.add(todo) : alert('Please enter a title !');
  }

  handleRequestToCheckTodo(todo:Todo){
    todo.isDone = !todo.isDone;
    this.todoServices.update(todo.id, todo);
  }

  handleRequestToDeleteTodo(todo:Todo){
    this.todoServices.delete(todo);
  }
  handleRequestToResetTodos(){
    this.todoServices.reset();
  }

  handleClickOnTitle(todo:Todo){
    this.todoServices.findOne(todo).subscribe((todo:Todo) => {
      let promptValue = prompt(todo.title);
      if(promptValue !== null){
        todo.title = promptValue;
        this.todoServices.update(todo.id, todo);
      }
    })    
  }
  constructor(private todoServices:TodoServices) { }

  ngOnInit() {
  //  this.todosSubscription = this.todoServices.todos$.subscribe((todos : Todo[]) => this.todos = todos);
   this.todoServices.findAll();
  }

  ngOnDestroy() {
    this.todosSubscription && this.todosSubscription.unsubscribe();
  }
}
