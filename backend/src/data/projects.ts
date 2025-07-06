export interface Project {
  projectId: string; // Changed to string for UUID compatibility
  title: string;
  tasksId: string[];
}

export const projects: Project[] = [
  {
    title: "Learn coding",
    projectId: "1",
    tasksId: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
];
