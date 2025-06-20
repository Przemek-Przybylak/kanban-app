"use client";

import { useEffect } from "react";
import { useProjectsStore } from "../../../stores/useProjectsStore";
import { useParams } from "next/navigation";
import DashboardPage from "../../dashboard/page";
import StatusWrapper from "../../../components/StatusWrapper/StatusWrapper";

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
        {project && <DashboardPage project={project} />}
      </StatusWrapper>
    </>
  );
}
