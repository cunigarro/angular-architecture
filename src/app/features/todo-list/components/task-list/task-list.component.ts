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
  @Output() editTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  sendTaskIdToRemove(taskId: number | undefined) {
    this.removeTask.emit(taskId);
  }

  sendTaskIdToEdit(task: Task) {
    this.editTask.emit(task);
  }
}
