"use client";
import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { Project } from "../../types/projects";
import { useModalStore } from "../../stores/useModalStore";

type props = {
  project: Project;
};

export default function Dashboard({ project }: props) {
  const { data: selectedTask } = useModalStore();

  return (
    <div className="p-6 flex-3">
      {selectedTask && <TaskModal />}
      <CanbanBoard tasks={project.tasks} />
    </div>
  );
}
