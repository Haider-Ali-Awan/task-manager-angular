import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task-dialogue',
  templateUrl: './edit-task-dialogue.component.html',
  styleUrls: ['./edit-task-dialogue.component.scss']
})
export class EditTaskDialogueComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public task: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: [task.name,
      [Validators.required]],
      assignedTo: [task.assignedTo,
      [Validators.required]],
      status: [task.status,
      [Validators.required]],
      email: [task.email,
      [Validators.required]],
      dueDate: [task.dueDate,
      [Validators.required]]
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

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedTask = { ...this.task, ...this.form.value }; // merge old + new
      this.dialogRef.close(updatedTask); // pass as single object
      this.openSnackBar('Task Updated Successfully');
    }
  }


}


