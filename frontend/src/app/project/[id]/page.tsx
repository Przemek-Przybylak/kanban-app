"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import StatusWrapper from "../../../components/StatusWrapper/StatusWrapper";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { AddProjectModal } from "../../../components/modals/AddProjectModal";
import EditProjectModal from "../../../components/modals/EditProjectModal";
import { useModalStore } from "../../../stores/useModalStore";
import { useTasksStore } from "../../../stores/useTasksStore";

export default function ProjectPage() {
  const { type } = useModalStore();
  const { fetchTasksByProjectId, tasks, loading, error } = useTasksStore();
  const { id } = useParams();

  useEffect(() => {
    fetchTasksByProjectId(id as string);
  }, [id, fetchTasksByProjectId]);

  return (
    <>
      <StatusWrapper loading={loading} error={error}>
        {type === "addProject" && <AddProjectModal />}
        {type === "editProject" && <EditProjectModal />}
        {tasks && <Dashboard tasks={tasks} />}
      </StatusWrapper>
    </>
  );
}
