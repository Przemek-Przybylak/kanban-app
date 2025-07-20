import { Project } from "../types/projects";
import prisma from "../lib/prismaClient";

export async function getProject(projectId: string) {
  return await prisma.project.findUnique({
    where: { projectId },
  });
}

export async function getProjects() {
  return await prisma.project.findMany();
}

export async function createProject(project: Project) {
  console.log("Creating project:", project);
  return await prisma.project.create({
    data: {
      title: project.title,
    },
  });
}

export async function deleteProject(projectId: string) {
  console.log("Deleting project with ID:", projectId);
  return await prisma.project.delete({
    where: { projectId },
  });
}

export async function editProject(
  projectId: string,
  newData: Partial<Project>
) {
  const { title } = newData;

  return await prisma.project.update({
    where: { projectId },
    data: {
      ...(title && { title }),
    },
  });
}
