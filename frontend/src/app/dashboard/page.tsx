"use client";
import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { useTaskModalStore } from "../../stores/useTaskModalStore";
import { Project } from "../../types/projects";

interface props {
  project: Project;
}

export default function DashboardPage({ project }: props) {
  const { selectedTask } = useTaskModalStore();

  return (
    <div className="p-6 flex-3">
      {selectedTask && <TaskModal />}
      <CanbanBoard tasks={project.tasks} />
    </div>
  );
}
