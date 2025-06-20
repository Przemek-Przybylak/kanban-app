"use client";
import { useEffect } from "react";
import { useProjectsStore } from "../../stores/useProjectsStore";
import Link from "next/link";

export default function SideBar() {
  const { fetchProjects, projects, loading, error } = useProjectsStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <aside className=" bg-gray-200 p-4 flex-1 w-1/4">
      <h2 className="text-xl font-bold mb-4 ">Projects</h2>
      <ul>
        {projects.map((project) => (
          <Link
            key={project.projectId}
            className="mb-2"
            href={`/projects/${project.projectId}`}
          >
            {project.title}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
1;
