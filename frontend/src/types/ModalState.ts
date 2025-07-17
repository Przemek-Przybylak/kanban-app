import { Project } from "../../../types/projects";
import { Task } from "../../../types/task";

export interface ModalState {
  isOpen: boolean;
  type: string | null;
  data: Project | Task | null;
  openModal: (type: string, data?: Project | Task) => void;
  closeModal: () => void;
}
