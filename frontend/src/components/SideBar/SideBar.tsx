"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useProjectsStore } from "../../stores/useProjectsStore";
import Link from "next/link";
import StatusWrapper from "../StatusWrapper/StatusWrapper";
import Button from "../Button/Button";
import { useModalStore } from "../../stores/useModalStore";
import { FiMenu, FiX } from "react-icons/fi";

export default function SideBar() {
  const { fetchProjects, projects, deleteProject, loading, error } =
    useProjectsStore();
  const { openModal } = useModalStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`
          bg-gray-200 rounded-2xl
          ${
            isMobileMenuOpen
              ? "fixed inset-0 z-40 overflow-y-auto mt-16 p-6"
              : "hidden lg:block p-5 m-4"
          }
          w-auto lg:w-1/5 lg:max-w-[280px]
          overflow-y-auto
        `}
      >
        <h2 className="text-xl font-bold mb-6 text-gray-800">Projects</h2>
        <Button
          onClick={() => openModal("addProject")}
          className="w-full mb-6 h-[40px] flex items-center justify-center"
        >
          Add Project
        </Button>

        <StatusWrapper loading={loading} error={error}>
          <ul className="space-y-4">
            {projects?.map((project) => (
              <li key={project.projectId} className="flex flex-col gap-2">
                <Link
                  className="mb-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all 
                  font-medium text-gray-800 hover:text-blue-600 border-l-4 border-blue-500"
                  href={`/project/${project.projectId}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {project.title}
                </Link>
                <Button
                  onClick={() => deleteProject(project.projectId)}
                  variant="danger"
                  className="w-full h-[40px] flex items-center justify-center"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </StatusWrapper>
      </aside>
    </>
  );
}
