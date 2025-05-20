import CanbanBoard from "@/components/kanban/CanbanBoard";
import { tasks } from "@/data/tasks";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <CanbanBoard tasks={tasks} />
    </div>
  );
}
