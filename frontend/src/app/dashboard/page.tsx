"use client";
import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { useTaskModalStore } from "../../stores/useTaskModalStore";
import { Project } from "../../types/projects";

export default function DashboardPage({ project }: { project: Project }) {
  const { selectedTask } = useTaskModalStore();

  return (
    <div className="p-6 flex-3">
      {selectedTask && <TaskModal />}
      <CanbanBoard tasks={project.tasks} />
    </div>
  );
}
