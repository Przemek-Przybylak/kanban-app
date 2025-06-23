import { create } from "zustand";
import { Project } from "../types/projects";
import { Task } from "../types/task";

type ModalType = "task" | "project" | null;

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  data: Project | Task | null;
  openModal: (type: ModalType, data?: Project | Task) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  openModal: (type, data = undefined) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: null, data: null }),
}));
