import { PrismaClient } from "@prisma/client";
import { Task } from "../types/task";

const prisma = new PrismaClient();

export async function getTasksByProjectId({
  projectId,
}: {
  projectId: string;
}) {
  return await prisma.task.findMany({
    where: { projectId },
  });
}

export async function addTask({
  addedTask,
  projectId,
}: {
  addedTask: Task;
  projectId: string;
}) {
  try {
    const result = await prisma.task.create({
      data: {
        projectId: projectId,
        title: addedTask.title,
        description: addedTask.description,
        dueDate: new Date(addedTask.dueDate),
        project: addedTask.project,
        status: addedTask.status || "todo",
        assignees: addedTask.assignees || [],
        approvedBy: addedTask.approvedBy || undefined,
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

export async function deleteTask(taskId: string) {
  await prisma.task.delete({
    where: { taskId },
  });
}

export async function editTask(taskId: string, newData: Partial<Task>) {
  return await prisma.task.update({
    where: { taskId },
    data: {
      ...newData,
      dueDate: newData.dueDate ? new Date(newData.dueDate) : undefined,
    },
  });
}
