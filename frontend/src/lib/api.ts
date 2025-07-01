import { Project } from "../types/projects";

export async function fetchProjects() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");

  return response.json();
}

export const fetchProject = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch project");
  return response.json();
};

export const postProject = async (project: Project) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  await fetchProjects();

  if (!response.ok) throw new Error("Failed to add project");
  return response.json();
};

export const putProject = async (id: string, project: Project) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    }
  );

  await fetchProject(id);

  if (!response.ok) throw new Error(`Failed to edit project with id ${id}`);
  return response.json();
};

export const deleteProject = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
    {
      method: "DELETE",
    }
  );

  await fetchProjects();

  if (!response.ok) throw new Error(`Failed to delete project with id ${id}`);
  return response.status === 204;
};
