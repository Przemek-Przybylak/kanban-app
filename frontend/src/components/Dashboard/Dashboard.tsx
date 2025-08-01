"use client";

import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { useModalStore } from "../../stores/useModalStore";
import { Task } from "../../types/task";

type Props = {
  tasks: Task[];
};

export default function Dashboard({ tasks }: Props) {
  const { type, isOpen } = useModalStore();

  return (
    <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-x-auto">
      {isOpen && type === "task" && <TaskModal />}

      <CanbanBoard tasks={tasks} />
    </div>
  );
}
