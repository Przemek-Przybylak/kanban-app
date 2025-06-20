import { create } from "zustand";
import { Project } from "../types/projects";
import { fetchProjects } from "../lib/api";

interface ProjectsStore {
  projects: Project[];
  error: string | null;
  loading: boolean;
  fetchProjects: () => Promise<void>;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
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
}));
