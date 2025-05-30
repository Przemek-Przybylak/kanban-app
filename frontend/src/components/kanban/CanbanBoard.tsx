import { Task } from "../../types/task";
import CanbanColumn from "./CanbanColumn";
import { Column } from "../../types/columns";

const statusColumn: Column[] = [
  { colId: 1, colTitle: "To Do", value: "todo" },
  { colId: 2, colTitle: "In Progress", value: "in_progress" },
  { colId: 3, colTitle: "To Check", value: "review" },
  { colId: 4, colTitle: "Done", value: "done" },
];

export default function CanbanBoard({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid grid-cols-4 gap-6 overflow-x-auto">
      {statusColumn.map((column) => {
        const filteredTasks = tasks.filter(
          (task) => task.status === column.value
        );
        return <CanbanColumn key={column.colId} tasks={filteredTasks} />;
      })}
    </div>
  );
}
