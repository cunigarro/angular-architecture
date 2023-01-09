import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskList: Task[] | undefined;
  @Output() removeTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  sendTaskId(taskId: number | undefined) {
    this.removeTask.emit(taskId);
  }
}
