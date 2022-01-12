import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // todo1: any = {
  //   userId: 1,
  //   title: 'Bardak',
  //   id: 1,
  //   completed: 5,
  // };
  // todo2: any = {
  //   userId: 2,
  //   title: 'Canta',
  //   id: 2,
  //   completed: 5,
  // };
  // todo3: any = {
  //   userId: 3,
  //   title: 'Kolye',
  //   id: 2,
  //   completed: 5,
  // };
  // todo4: any = {
  //   userId: 4,
  //   title: 'Kitap',
  //   id: 3,
  //   completed: 5,
  // };
  // todo5: any = {
  //   userId: 5,
  //   title: 'Ayakkabi',
  //   id: 4,
  //   completed: 5,
  // };
  // todos:Todo[] = [
  //   this.todo1,
  //   this.todo2,
  //   this.todo3,
  //   this.todo4,
  //   this.todo5,
  // ];

  //todos: Todo[] = [];
  dataLoaded = false;
  // todoResponseModel: todoResponseModel = {
  //   data: this.todos,
  //   message: '',
  //   success: true,
  // };
  constructor(private todoService: TodosService) {} //bir servisi kullanmak icin parantez icine yazariz

  ngOnInit(): void {
    //this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      //this.todos = response.data;
      // this.dataLoaded = true;
    });
  }
}
