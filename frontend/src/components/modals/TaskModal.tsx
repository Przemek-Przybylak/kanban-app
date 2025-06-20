import { useTaskModalStore } from "../../stores/useTaskModalStore";
import { StatusBadge } from "./statusBadge";

export default function TaskModal() {
  const { selectedTask, closeTaskModal } = useTaskModalStore();

  if (!selectedTask) return null;

  const {
    title,
    description,
    dueDate,
    project,
    status,
    assignees,
    approvedBy,
  } = selectedTask;

  return (
    <div
      className="fixed inset-0 bg-neutral-400 bg-opacity-50 z-50 flex items-center justify-center"
      onClick={closeTaskModal}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeTaskModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
          <span>
            Projekt: <strong className="text-gray-700">{project}</strong>
          </span>
          <span>
            Termin: <strong className="text-gray-700">{dueDate}</strong>
          </span>
          <span>
            Status: <StatusBadge status={status} />
          </span>
        </div>
        <div className="prose prose-sm text-gray-700 mb-6">
          <p>{description}</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Osoby przypisane:
          </h3>
          <ul className="flex flex-wrap gap-2">
            {assignees.map((name) => (
              <li
                key={name}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {approvedBy ? (
          <p className="text-sm text-green-600">
            ✅ Zatwierdzone przez: <strong>{approvedBy}</strong>
          </p>
        ) : (
          <p className="text-sm text-yellow-600">
            ⏳ Oczekuje na zatwierdzenie
          </p>
        )}
      </div>
    </div>
  );
}
