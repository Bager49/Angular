import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: Todo[] = []; // todo.ts de ki Todo interface den al yani sablondan
  currentCategory: Todo = {
    userId: 0,
    id: 0,
    title: 'deneme',
    completed: true,
  };
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.todoService.getTodos().subscribe((response) => {
      // serviste olustudugumuz getTodos fonksiyonunu burada calistiriyoruz
      this.category = response;
    });
  }

  setcurrentCategory(category: any) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: any) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
