"use client";
import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { useModalStore } from "../../stores/useModalStore";
import { Task } from "../../types/task";

type props = {
  tasks: Task[];
};

export default function Dashboard({ tasks }: props) {
  const { type } = useModalStore();

  return (
    <div className="p-6 flex-3">
      {type === "task" && <TaskModal />}
      <CanbanBoard tasks={tasks} />
    </div>
  );
}
