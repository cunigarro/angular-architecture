import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../types/task';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({});
  @Output() sendTask = new EventEmitter();
  @Input() taskToEdit: Task | null | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      addTaskControl: [null, [Validators.required]]
    })
  }

  onSubmit() {
    if(this.taskForm.value.addTaskControl != null) {
      if(this.taskToEdit != null) {
        this.sendTask.emit({
          id: this.taskToEdit.id,
          title: this.taskForm.value.addTaskControl,
          status: 'Done'
        });
      } else {
        this.sendTask.emit(this.taskForm.value.addTaskControl);
      }
    }

    this.taskToEdit = null;
    this.taskForm.reset();
  }
}
