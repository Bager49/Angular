import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // getCategories() {
  //   throw new Error('Method not implemented.');
  // }
  apiUrl = 'http://jsonplaceholder.typicode.com/';
  // apiUrl2 = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    let newPath = this.apiUrl + 'todos';
    return this.httpClient.get<Todo[]>(newPath); //gelen datayi todoResponse modeline map et demek
  }
  getTodosByCategory(categoryId: number): Observable<Todo[]> {
    let newPath = this.apiUrl + 'todos/' + categoryId;
    console.log(categoryId);
    return this.httpClient.get<Todo[]>(newPath); //gelen datayi todoResponse modeline map et demek
  }

  add(todo: Todo) {
    return this.httpClient.post(this.apiUrl + 'todos/add', todo);
  }
}
