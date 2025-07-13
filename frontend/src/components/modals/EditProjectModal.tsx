import { useState } from "react";
import { useModalStore } from "../../stores/useModalStore";
import { ModalWrapper } from "./ModalsWrapper";
import { Project } from "../../types/projects";
import { useProjectsStore } from "../../stores/useProjectsStore";
import { Task } from "../../types/task";

export default function EditProjectModal() {
  const [newTask, setTask] = useState<Task>({
    id: "",
    projectId: "",
    title: "",
    description: "",
    dueDate: "",
    status: "todo",
    assignees: [],
    approvedBy: "",
    project: "",
  });
  const [assigneeInput, setAssigneeInput] = useState("");
  const { type, closeModal } = useModalStore();
  const { updateProject } = useProjectsStore();
  const { project } = useProjectsStore(); // Ensure id is a string

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject: Project = {
      ...project,
      // tasks: [...project.tasks, newTask],
    };
    updateProject(project.projectId, newProject);
    closeModal();
  };

  const handleAddAssignee = () => {
    if (assigneeInput.trim() !== "") {
      setTask({
        ...newTask,
        assignees: [...newTask.assignees, assigneeInput.trim()],
      });
      setAssigneeInput("");
    }
  };

  if (type !== "editProject") return null;
  return (
    <ModalWrapper isOpen={true} onClose={closeModal}>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Task title</label>
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          value={newTask.description}
          onChange={(e) => setTask({ ...newTask, description: e.target.value })}
        />
        <label>Due Date</label>
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setTask({ ...newTask, dueDate: e.target.value })}
        />
        <label>Status</label>
        <select
          value={newTask.status}
          onChange={(e) => setTask({ ...newTask, status: e.target.value })}
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </select>
        <label>Assignees</label>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={assigneeInput}
            onChange={(e) => setAssigneeInput(e.target.value)}
          />
          <button type="button" onClick={handleAddAssignee}>
            Dodaj
          </button>
        </div>
        <ul>
          {newTask.assignees.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
        <label>Approved By</label>
        <input
          type="text"
          value={newTask.approvedBy}
          onChange={(e) => setTask({ ...newTask, approvedBy: e.target.value })}
        />
        <button type="submit">Save</button>
      </form>
    </ModalWrapper>
  );
}
