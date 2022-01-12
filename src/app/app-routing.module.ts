import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent,
  },
  {
    path: 'todos', //eger birisi sitenin sonuna /todos yazarsa yine calisir ayni sayfayi getirir
    component: TodoComponent,
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
  },
  {
    path: 'todos/add',
    component: TodoAddComponent,
  },
  {
    path: 'todos/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
