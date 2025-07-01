"use client";
import { useEffect } from "react";
import { useProjectsStore } from "../../stores/useProjectsStore";
import Link from "next/link";
import StatusWrapper from "../StatusWrapper/StatusWrapper";
import Button from "../Button/Button";
import { useModalStore } from "../../stores/useModalStore";

export default function SideBar() {
  const { fetchProjects, projects, loading, error } = useProjectsStore();
  const { openModal } = useModalStore();
  const { deleteProject } = useProjectsStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <aside className=" bg-gray-200 m-4 flex-1 w-1/5 max-w-[250px] p-4 rounded-2xl">
      <h2 className="text-xl font-bold mb-4 ">Projects</h2>
      <Button onClick={() => openModal("addProject")}>Add Project</Button>
      <StatusWrapper loading={loading} error={error}>
        <ul className="flex flex-col gap-2">
          {projects.map((project) => (
            <>
              <Link
                key={project.projectId}
                className="mb-2"
                href={`/project/${project.projectId}`}
              >
                {project.title}
              </Link>
              <Button onClick={() => deleteProject(project.projectId)}>
                Remove
              </Button>
            </>
          ))}
        </ul>
      </StatusWrapper>
    </aside>
  );
}
