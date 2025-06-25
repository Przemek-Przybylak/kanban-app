import { useState } from "react";
import { ModalWrapper } from "./ModalsWrapper";
import { Project } from "../../types/projects";
import { useModalStore } from "../../stores/useModalStore";
import { useProjectsStore } from "../../stores/useProjectsStore";

export const AddProjectModal = () => {
  const { type, closeModal } = useModalStore();
  const [newProject, setNewProject] = useState<Project>({} as Project);
  const { sendProject } = useProjectsStore();

  if (type !== "project") return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({
      ...newProject,
      title: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendProject(newProject);
    closeModal();
  };

  return (
    <ModalWrapper isOpen={true} onClose={closeModal}>
      <h2>Add project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project title: </label>
        <input
          type="text"
          value={newProject.title}
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Add</button>
      </form>
    </ModalWrapper>
  );
};
