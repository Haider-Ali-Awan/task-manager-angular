export interface Task {
  id: number;
  name: string;
  assignedTo: string;
  status: 'Pending' | 'Completed';
  email: string;
  dueDate: string;
}
