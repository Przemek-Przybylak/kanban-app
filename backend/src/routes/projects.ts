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
  newProject.projectId = uuidv4();
  projects.push(newProject);
  res.status(201).json(newProject);
});

projectsRouter.put("/:id", (req, res) => {
  // console.log("PUT /projects/:id - BODY:", req.body); //
  const id = req.params.id;
  const updatedProject = req.body as Project;
  const index = projects.findIndex((p) => p.projectId === id);
  if (index >= 0) {
    projects[index] = { ...projects[index], ...updatedProject };
    // console.log("Backend wysyła:", projects[index]);
    res.status(200).json(projects[index]);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

projectsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = projects.findIndex((p) => p.projectId === id);
  if (index >= 0) {
    projects.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

export default projectsRouter;
