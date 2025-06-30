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
  const { type, openModal } = useModalStore();
  const { fetchProject, project, loading, error } = useProjectsStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const numericId = String(id);
      if (!isNaN(Number(numericId))) {
        fetchProject(numericId);
      }
    }
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
