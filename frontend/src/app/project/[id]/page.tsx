"use client";

import { use, useEffect } from "react";
import { useProjectsStore } from "../../../stores/useProjectsStore";
import { useParams } from "next/navigation";
import DashboardPage from "../../dashboard/page";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <>{project && <DashboardPage project={project} />}</>;
}
