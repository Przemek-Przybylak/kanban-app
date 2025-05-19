export type TaskStatus = "todo" | "in_progress" | "done" | "review";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  project: string;
  status: TaskStatus;
  assignees: string[];
  approved: boolean;
  approvedBy: string | null;
}
