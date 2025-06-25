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
  newProject as Project;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({
      ...newProject,
      title: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    sendProject(newProject);
  };

  return (
    <ModalWrapper isOpen={true} onClose={closeModal}>
      <h2>Add project</h2>
      <form>
        <label>Project title: </label>
        <input onChange={handleChange} type="string"></input>
        <button onSubmit={() => onSubmit}>Add</button>
      </form>
    </ModalWrapper>
  );
};
