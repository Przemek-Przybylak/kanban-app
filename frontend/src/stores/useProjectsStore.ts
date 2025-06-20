import { create } from "zustand";
import { Project } from "../types/projects";
import { fetchProject, fetchProjects } from "../lib/api";

interface ProjectsStore {
  project: Project | null;
  projects: Project[];
  error: string | null;
  loading: boolean;
  fetchProjects: () => Promise<void>;
  fetchProject: (id: number) => Promise<void>;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  project: null,
  projects: [],
  error: null,
  loading: false,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const projects: Project[] = await fetchProjects();
      set({ projects, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchProject: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const response = await fetchProject(id);
      set({ project: response, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));
