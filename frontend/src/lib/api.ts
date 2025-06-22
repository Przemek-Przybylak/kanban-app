import { Project } from "../types/projects";

export async function fetchProjects() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");

  return response.json();
}

export const fetchProject = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch project");
  return response.json();
};

export const sendProject = async (project: Project) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) throw new Error("Failed to add project");
  return response.json();
};
