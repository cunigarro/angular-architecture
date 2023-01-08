import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    TodoListRoutingModule,
    CommonModule
  ],
  exports: [],
  providers: [],
})
export class TodoListModule {}
