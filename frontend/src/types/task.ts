export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  project: string;
  status: string;
  assignees: string[];
  approvedBy: string | undefined;
}
