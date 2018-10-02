import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODOS: string = 'todos';

@Injectable({
  providedIn: 'root'
})
export class TodoApi {

  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get(`${API_BASE_URL}${API_TODOS}`).pipe();
  }

  findOne(todo:Todo){
    return this.http.get(`${API_BASE_URL}${API_TODOS}/${todo.id}`).pipe();
  }

  add(todo:Todo){
      return this.http.post<Todo>(`${API_BASE_URL}${API_TODOS}`, todo)
        .pipe();
  }

  delete(todo:Todo){
    return this.http.delete(`${API_BASE_URL}${API_TODOS}/${todo.id}`);
  }

  update(id:number, todo:Todo){
    return this.http.put<Todo>(`${API_BASE_URL}${API_TODOS}/${id}`, todo)
        .pipe();
  }
}
