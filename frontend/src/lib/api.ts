export async function fetchProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
  );
  if (!response.ok) throw new Error("Failed to fetch projects");

  return response.json();
}
