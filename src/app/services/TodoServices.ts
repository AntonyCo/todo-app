import { Todo } from "../model/Todo";
import { Injectable } from "@angular/core";
import { Observable, from, BehaviorSubject } from "rxjs";
import { filter, take, multicast, concat, map } from "rxjs/operators";
import { isNumber } from "util";
import { TodoApi } from "./TodoApi";
@Injectable({
    providedIn: 'root'
})
export class TodoServices{
    public todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

    constructor(
        private todoApi:TodoApi
    ){}

    add(todo:Todo):void {
        this.todoApi.add(todo)
            .subscribe((todo : Todo) => {
                this.todos$.next([todo, ...this.todos$.getValue()]);
            });
      }
    
    delete(todo:Todo){
        this.todoApi.delete(todo)
            .subscribe(() => {
                //UPDATE ARRAY
                // const index = this.todos$.getValue().indexOf(todo);
                // this.todos$.getValue().splice(index, 1);
                this.todos$.next(this.todos$.getValue().filter(t => t.id !== todo.id));
            });
    }

   reset(){
    this.todoApi.findAll().subscribe((todos:Todo[]) => {
        todos.forEach(t => {
          this.delete(t);
        })
      })
   }

   findAll(){
    //  return this.todoApi.findAll().pipe(
    //      multicast(this.todos$),
    //    );
    return this.todoApi.findAll().subscribe((todos : Todo[]) => this.todos$.next(todos));
   }

   findOne(todo:Todo){
        return this.todoApi.findOne(todo);
   }

   update(id:number, todo:Todo){
        this.todoApi.update(id, todo).subscribe( (todo:Todo) => {
            const value:Todo[] = this.todos$.getValue();
            const index = value.indexOf(value.filter(t => t.id === todo.id)[0]);
            value[index] = todo;
            this.todos$.next(value);
        })
   }
}