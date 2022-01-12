import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo';
import { CartService } from 'src/app/services/cart.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []; // todo.ts de ki Todo interface den al yani sablondan
  dataLoaded = false; // api gec yuklenirse yukleniyor simgesini acip kapamak icin
  filterText = '';
  constructor(
    private todoService: TodosService,
    private activaedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activaedRoute.params.subscribe((params) => {
      if (params['category']) {
        this.getTodosByCategory(params['category']);
      } else {
        this.getTodos();
      }
    });
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      // serviste olustudugumuz getTodos fonksiyonunu burada calistiriyoruz
      this.todos = response;
      this.dataLoaded = true;
      console.log('todoss');
    });
  }

  getTodosByCategory(categoryId: number) {
    this.todoService.getTodosByCategory(categoryId).subscribe((response) => {
      // serviste olustudugumuz getTodosByCategory fonksiyonunu burada calistiriyoruz
      this.todos = response;
      this.dataLoaded = true;
      console.log('category');
    });
  }

  addToCard(todo: Todo) {
    if (todo.id % 3 === 0) {
      this.toastrService.error('Hata!!', 'Bu To do ya islem yapilamaz!!!');
    } else {
      this.toastrService.success('sepete Eklendi', todo.title.split(' ')[0]);
      this.cartService.addToCart(todo);
    }
  }
}
