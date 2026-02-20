import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { DeleteTaskDialogueComponent } from '../delete-task-dialogue/delete-task-dialogue.component';
import { EditTaskDialogueComponent } from '../edit-task-dialogue/edit-task-dialogue.component';
@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.scss']
})
export class TaskCardsComponent implements OnInit {
  @Input() task!: Task;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    openDeleteDialog(task: any): void {
    const dialogRef = this.dialog.open(DeleteTaskDialogueComponent, {
      width: '350px',
      data: { task: task }, 
      disableClose: true,   
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.delete.emit(task.id); // emit delete if user clicked Yes
      }
    });
  }

   openEditDialog(task: any): void {
        this.edit.emit(task);
      }
}


