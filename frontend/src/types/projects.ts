import { Task } from "./task";

export interface Project {
  projectId: number;
  title: string;
  tasks: Task[];
}
