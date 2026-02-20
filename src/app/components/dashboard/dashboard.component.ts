
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogueComponent } from '../edit-task-dialogue/edit-task-dialogue.component';
import { DeleteTaskDialogueComponent } from '../delete-task-dialogue/delete-task-dialogue.component';
import { AboutDialogueComponent } from '../about-dialogue/about-dialogue.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  selectedTab: number = 0;
  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  // Form se new task add
  addTask(task: Task) {
    this.taskService.addTask(task);
    this.selectedTab = 1;
    this.loadTasks();
  }

  // Card se edit modal
  editTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskDialogueComponent, {
      width: '500px',
      data: task,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(updatedTask => {
      if (updatedTask) {
        this.taskService.updateTask({ ...task, ...updatedTask });
        this.loadTasks();
      }
    });
  }

  // Card se delete modal
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  // Dashboard counts
  get totalTasks() { return this.tasks.length; }
  get completedTasks() { return this.tasks.filter(t => t.status === 'Completed').length; }
  get pendingTasks() { return this.tasks.filter(t => t.status === 'Pending').length; }

  openAbout() {
    this.dialog.open(AboutDialogueComponent, {
      width: '700px',
      disableClose: true
    });

  }
}