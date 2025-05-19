import { Task } from "@/types/task";

function StatusBadge({ status }: { status: string }) {
  // add color for each status
  const colors: Record<string, string> = {
    todo: "bg-gray-200 text-gray-800",
    in_progress: "bg-blue-200 text-blue-800",
    review: "bg-yellow-200 text-yellow-800",
    done: "bg-green-200 text-green-800",
  };

  const colorClass = colors[status] || "bg-gray-200 text-gray-800";

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}
    >
      {status.replace("_", " ").toUpperCase()}
    </span>
  );
}

export default function TaskCard({ task }: { task: Task }) {
  const { title, description, dueDate, project, status } = task;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
