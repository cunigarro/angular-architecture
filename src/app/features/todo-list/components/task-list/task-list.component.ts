import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() taskList: Task[] | undefined;

  constructor() { }

  ngOnInit(): void { }
}
