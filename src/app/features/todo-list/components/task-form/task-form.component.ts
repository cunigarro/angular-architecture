import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../types/task';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({});
  @Output() sendTask = new EventEmitter();
  @Input() taskToEdit: Task | undefined;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      addTaskControl: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if(this.taskForm.value.addTaskControl != '') {
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

    this.taskForm.reset();
  }
}
