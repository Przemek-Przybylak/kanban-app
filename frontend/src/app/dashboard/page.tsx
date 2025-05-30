"use client";
import CanbanBoard from "../../components/kanban/CanbanBoard";
import TaskModal from "../../components/modals/TaskModal";
import { tasks } from "../../data/tasks";
import { useTaskModalStore } from "../../stores/useTaskModalStore";

export default function DashboardPage() {
  const { selectedTask } = useTaskModalStore();
  console.log(selectedTask);
  return (
    <div className="p-6 flex-3">
      {selectedTask && <TaskModal />}
      <CanbanBoard tasks={tasks} />
    </div>
  );
}
