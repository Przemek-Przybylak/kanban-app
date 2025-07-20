import { Project } from "../types/projects";
import * as projectService from "../services/projectService";

export async function getProjectController({
  projectId,
}: {
  projectId: string;
}) {
  return await projectService.getProject(projectId);
}

export async function getProjectsController() {
  return await projectService.getProjects();
}

export async function createProjectController(project: Project) {
  return await projectService.createProject(project);
}

export async function deleteProjectController(projectId: string) {
  return await projectService.deleteProject(projectId);
}

export async function editProjectController(
  projectId: string,
  newData: Partial<Project>
) {
  return await projectService.editProject(projectId, newData);
}
