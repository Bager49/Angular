import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms'; //formbilder html ile yapilandirma yapmamizi saglar
import { ToastrService } from 'ngx-toastr';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoAddFrom: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodosService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createTodoAddForm(); //asagida yapilandirdigimiz form kurallarini burda cagiriyoruz
  }

  createTodoAddForm() {
    this.todoAddFrom = this.formBuilder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      completed: ['', Validators.required],
    });
  }

  add() {
    //ben Json dosayasi kullandigim icin eklemez veri tabani ile calissaydim olurdu
    if (this.todoAddFrom.valid) {
      let todosModel = Object.assign({}, this.todoAddFrom.value);
      this.todoService.add(todosModel).subscribe(
        (data) => {
          console.log(data);
          this.toastrService.success('Ürün Eklendi', 'tebrikler!!');
        },
        (responseError) => {
          console.log(responseError.error); //hata alirsak kayniagini ogrenme
        }
      );
    } else {
      this.toastrService.info('hata!', 'form Eksik');
    }
  }
}
