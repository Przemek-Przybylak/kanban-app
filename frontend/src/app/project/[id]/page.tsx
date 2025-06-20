"use client";

import { useEffect } from "react";
import { useProjectsStore } from "../../../stores/useProjectsStore";
import { useParams } from "next/navigation";
import StatusWrapper from "../../../components/StatusWrapper/StatusWrapper";
import Dashboard from "../../../components/Dashboard/Dashboard";

export default function ProjectPage() {
  const { fetchProject, project, loading, error } = useProjectsStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      if (!isNaN(numericId)) {
        fetchProject(numericId);
      }
    }
  }, [id, fetchProject]);

  return (
    <>
      <StatusWrapper loading={loading} error={error}>
        {project && <Dashboard project={project} />}
      </StatusWrapper>
    </>
  );
}
