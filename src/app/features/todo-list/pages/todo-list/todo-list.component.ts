import { Component, OnInit } from '@angular/core';
import { TodoListEndpoint } from '../../services/todo-list.endpoint';
import { TodoListStore } from '../../services/todo-list.store';
import { Task } from '../../types/task';

@Component({
  templateUrl: './todo-list.component.html',
  providers: [
    TodoListStore,
    TodoListEndpoint
  ]
})
export class TodoListComponent implements OnInit {
  taskToEdit: Task | undefined | null;

  constructor(
    public todoListStore: TodoListStore
  ) { }

  ngOnInit(): void {
    this.todoListStore.init();
  }

  addTaskEvent(resp: any) {
    if(this.taskToEdit != null) {
      this.todoListStore.editTask(resp)
      this.taskToEdit = null;
    } else {
      this.todoListStore.addTask({
        title: resp,
        state: 'Done'
      });
    }
  }

  editTaskEvent(resp: any) {
    this.taskToEdit = resp;
  }

  removeTaskEvent(resp: any) {
    this.todoListStore.removeTask(resp);
  }
}
