import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({});
  @Output() sendTask = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      addTaskControl: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.sendTask.emit(this.taskForm.value.addTaskControl);
    this.taskForm.reset();
  }
}
