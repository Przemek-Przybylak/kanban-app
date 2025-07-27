import { Task } from "../types/task";
import prisma from "../lib/prismaClient";

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
        project: {
          connect: { projectId: projectId },
        },
        title: addedTask.title,
        description: addedTask.description,
        dueDate: new Date(addedTask.dueDate),
        status: addedTask.status || "todo",
        assignees: addedTask.assignees || [],
        approvedBy: addedTask.approvedBy || undefined,
      },
    });
    return result;
  } catch (error) {
    console.error("Error creating task in taskService:", error);
    throw error;
  }
}

export async function deleteTask(taskId: string) {
  console.log("Deleting task with ID:", taskId);
  return await prisma.task.delete({
    where: { taskId },
  });
}

export async function editTask(taskId: string, newData: Partial<Task>) {
  const { project, ...cleanData } = newData; // usuwamy 'project' z obiektu

  return await prisma.task.update({
    where: { taskId },

    data: {
      ...cleanData,
      dueDate: cleanData.dueDate ? new Date(cleanData.dueDate) : undefined,
    },
  });
}
