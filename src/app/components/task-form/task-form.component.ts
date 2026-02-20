import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  // @Input() task: Task | null = null;
  @Output() saveTask = new EventEmitter<Task>();
  taskForm: FormGroup;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      assignedTo: ['', [Validators.required]],
      status: ['Pending',
        [Validators.required]],
      email: ['',
        [Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]
      ],
      dueDate: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-primary']
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData: Task = { ...this.taskForm.value, id: Date.now() };
      this.saveTask.emit(taskData);
      this.taskForm.reset({ status: 'Pending' });
      this.openSnackBar('Task Created Successfully');
    }
  }
}
