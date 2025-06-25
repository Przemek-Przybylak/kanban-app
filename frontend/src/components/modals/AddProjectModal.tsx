import { useState } from "react";
import { ModalWrapper } from "./ModalsWrapper";
import { Project } from "../../types/projects";
import { useModalStore } from "../../stores/useModalStore";

export const AddProjectModal = () => {
  const { data, type, closeModal } = useModalStore();
  const [newProject, setNewProject] = useState<Project>({} as Project);

  if (type !== "project") return null;
  newProject as Project;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newProject.title = e.target.value;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewProject(newProject);
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
