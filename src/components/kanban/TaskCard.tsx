import { useTaskModalStore } from "@/stores/useTaskModalStore";
import { Task } from "@/types/task";
import { StatusBadge } from "../modals/statusBadge";

export default function TaskCard({ task }: { task: Task }) {
  const { title, description, dueDate, project, status } = task;
  const { openTaskModal } = useTaskModalStore();

  return (
    <div
      className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => openTaskModal(task)}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
        <div>
          <strong>Due:</strong> {dueDate}
        </div>
        <div>
          <strong>Project:</strong> {project}
        </div>
        <div>
          <strong>Status:</strong> <StatusBadge status={status} />
        </div>
      </div>
    </div>
  );
}
