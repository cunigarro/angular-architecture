import { Component, OnInit } from '@angular/core';
import { TodoListEndpoint } from '../../services/todo-list.endpoint';
import { TodoListStore } from '../../services/todo-list.store';

@Component({
  templateUrl: './todo-list.component.html',
  providers: [
    TodoListStore,
    TodoListEndpoint
  ]
})
export class TodoListComponent implements OnInit {
  constructor(
    public todoListStore: TodoListStore
  ) { }

  ngOnInit(): void {
    this.todoListStore.init();
  }

  AddTaskEvent(resp: any) {
    this.todoListStore.addTask({
      title: resp,
      state: 'Done'
    })
  }

  removeTaskEvent(resp: any) {
    this.todoListStore.removeTask(resp);
  }
}
