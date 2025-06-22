import express from "express";
import { Project, projects } from "../data/projects";
import { v4 as uuidv4 } from "uuid";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.json(projects);
});

projectsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((p) => p.projectId === id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

projectsRouter.post("/", (req, res) => {
  const newProject = req.body as Project;
  if (!newProject.title) {
    res.status(400).json({ error: "Name are required" });
    return;
  }
  newProject.projectId = uuidv4(); // Simple ID generation
  projects.push(newProject);
  res.status(201).json(newProject);
});

export default projectsRouter;
