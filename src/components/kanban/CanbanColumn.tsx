import { Task } from "@/types/task";
import TaskCard from "./TaskCard";

export default function CanbanColumn({ tasks }: { tasks: Task[] }) {
  const status = tasks.length > 0 ? tasks[0].status : "No tasks";
  const formattedStatus = status.replace(/_/g, " ").toUpperCase();

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b border-gray-300 pb-2">
        {formattedStatus}
      </h3>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="text-gray-500 italic">Brak zadań w tej kolumnie</p>
        )}
      </div>
    </div>
  );
}
