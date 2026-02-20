import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Design Login Page', assignedTo: 'Haider', status: 'Pending', email: "Haider@gmail.com", dueDate: '2026-02-20' },
    { id: 2, name: 'Setup Angular Project', assignedTo: 'Haider', status: 'Completed', email: "Haider@gmail.com", dueDate: '2026-02-18' }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index > -1) this.tasks[index] = updatedTask;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
