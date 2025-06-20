import express from "express";
import { projects } from "../data/projects";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.json(projects);
});

projectsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const project = projects.find((p) => p.projectId === id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

export default projectsRouter;
