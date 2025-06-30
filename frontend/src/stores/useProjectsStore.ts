import { create } from "zustand";
import { Project } from "../types/projects";
import {
  fetchProject,
  fetchProjects,
  postProject,
  putProject,
} from "../lib/api";

interface ProjectsStore {
  project: Project | null;
  projects: Project[];
  error: string | null;
  loading: boolean;
  fetchProjects: () => Promise<void>;
  fetchProject: (id: string) => Promise<void>;
  sendProject: (project: Project) => Promise<void>;
  updateProject: (id: string, project: Project) => Promise<void>;
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
  fetchProject: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetchProject(id);
      set({ project: response, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  sendProject: async (project: Project) => {
    set({ loading: true, error: null });
    try {
      await postProject(project);
      set((state) => ({
        projects: [...state.projects, project],
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  updateProject: async (id: string, project: Project) => {
    set({ loading: true, error: null });
    try {
      await putProject(id, project);
      set((state) => ({
        projects: state.projects.map((p) => (p.projectId === id ? project : p)),
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));
