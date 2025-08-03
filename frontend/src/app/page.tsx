"use client";
import React from "react";
import Button from "../components/Button/Button";
import { AddProjectModal } from "../components/modals/AddProjectModal";
import { useModalStore } from "../stores/useModalStore";

export default function Home() {
  const { type, openModal } = useModalStore();
  return (
    <main className="p-6 flex items-center justify-center h-full w-4/5">
      {type === "addProject" && <AddProjectModal />}
      <Button onClick={() => openModal("addProject")}>Add Project</Button>
    </main>
  );
}
