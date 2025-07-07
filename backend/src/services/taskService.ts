import { Task, tasks } from "../data/tasks";

export async function getTasksById({ projectId }: { projectId: string }) {
  const filteredTasks = tasks.filter((t) => t.project === projectId);
  return filteredTasks;
}

export async function addTask({ addedTask }: { addedTask: Task }) {
  const newTask = {
    taskId: (tasks.length + 1).toString(),
    title: addedTask.title,
    description: addedTask.description,
    dueDate: addedTask.dueDate,
    project: addedTask.project,
    status: addedTask.status || "todo",
    assignees: addedTask.assignees || [],
    approvedBy: addedTask.approvedBy || null,
  };
  tasks.push(newTask);
  return newTask;
}

export async function deleteTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task.taskId === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  } else {
    throw new Error("Task not found");
  }
}

export async function editTask(taskId: string, newData: Partial<Task>) {
  const index = tasks.findIndex((t) => t.taskId === taskId);
  if (index === -1) throw new Error("Task not found");

  tasks[index] = { ...tasks[index], ...newData };
  return tasks[index];
}
