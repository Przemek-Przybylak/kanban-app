import { Task } from "../data/tasks";
import * as taskService from "../services/taskService";

export async function getTasksByProjectIdController({
  projectId,
}: {
  projectId: string;
}) {
  return await taskService.getTasksByProjectId({ projectId });
}

export async function createTaskController({ addedTask }: { addedTask: Task }) {
  return await taskService.addTask({ addedTask });
}

export async function deleteTaskController(taskId: string) {
  return await taskService.deleteTask(taskId);
}

export async function editTaskController(
  taskId: string,
  newData: Partial<Task>
) {
  return await taskService.editTask(taskId, newData);
}
