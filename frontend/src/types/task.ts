export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  project: string;
  status: string;
  assignees: string[];
  approvedBy: string | null;
}
