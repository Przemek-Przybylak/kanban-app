import { create } from "zustand";
import { Task } from "../types/task";

interface TaskModalStore {
  selectedTask: Task | null;
  openTaskModal: (task: Task) => void;
  closeTaskModal: () => void;
}

export const useTaskModalStore = create<TaskModalStore>((set) => ({
  selectedTask: null,
  openTaskModal: (task) => set({ selectedTask: task }),
  closeTaskModal: () => set({ selectedTask: null }),
}));
