import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Task } from '../types/task';

@Injectable()
export class TodoListEndpoint {
  constructor(private http: HttpClient) {}

  listTasks() {
    return this.http.get(`${environment.apiBaseUrl}/todo_list`);
  }

  addTask(task: Task) {
    return this.http.post(`${environment.apiBaseUrl}/todo_list`, task);
  }
}
