"use client";
import { AddProjectModal } from "../components/modals/AddProjectModal";
import { useModalStore } from "../stores/useModalStore";

export default function Home() {
  const { type, openModal } = useModalStore();
  return (
    <>
      {type === "addProject" && <AddProjectModal />}
      <button onClick={() => openModal("addProject")}>add project</button>
    </>
  );
}
