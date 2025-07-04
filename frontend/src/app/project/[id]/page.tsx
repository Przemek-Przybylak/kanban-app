"use client";

import { useEffect } from "react";
import { useProjectsStore } from "../../../stores/useProjectsStore";
import { useParams } from "next/navigation";
import StatusWrapper from "../../../components/StatusWrapper/StatusWrapper";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { AddProjectModal } from "../../../components/modals/AddProjectModal";
import EditProjectModal from "../../../components/modals/EditProjectModal";
import { useModalStore } from "../../../stores/useModalStore";

export default function ProjectPage() {
  const { type } = useModalStore();
  const { fetchProject, project, loading, error } = useProjectsStore();
  const { id } = useParams();

  useEffect(() => {
    fetchProject(id as string);
  }, [id, fetchProject]);

  return (
    <>
      <StatusWrapper loading={loading} error={error}>
        {type === "addProject" && <AddProjectModal />}
        {type === "editProject" && <EditProjectModal />}
        {project && <Dashboard project={project} />}
      </StatusWrapper>
    </>
  );
}
