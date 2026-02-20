import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-task-dialogue',
  templateUrl: './delete-task-dialogue.component.html',
  styleUrls: ['./delete-task-dialogue.component.scss']
})
export class DeleteTaskDialogueComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteTaskDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string = '') {
    this.snackBar.open(message, action, {
      duration: 3000,           
      horizontalPosition: 'right',  
      verticalPosition: 'top',
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.openSnackBar('Task Deleted Successfully');
  }

}
