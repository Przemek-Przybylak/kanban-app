import express from "express";
import * as projectController from "../controllers/projectControllers";

const projectsRouter = express.Router();

projectsRouter.get("/", async (req, res) => {
  const projects = await projectController.getProjectsController();
  res.json(projects);
});

projectsRouter.get("/:id", async (req, res) => {
  const projectId = req.params.id;
  const project = await projectController.getProjectController({ projectId });
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

projectsRouter.post("/", async (req, res, next) => {
  const newProject = req.body;

  if (!newProject.title) {
    return next(new Error("Title is required"));
  }
  try {
    const createdProject = await projectController.createProjectController(
      newProject
    );
    res.status(201).json(createdProject);
  } catch (error) {
    next(error);
  }
});

projectsRouter.put("/:id", async (req, res) => {
  // console.log("PUT /projects/:id - BODY:", req.body); //
  const projectId = req.params.id;
  const newDatat = req.body;
  const updatedProject = await projectController.editProjectController(
    projectId,
    newDatat
  );
  if (updatedProject) {
    res.status(200).json(updatedProject);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

projectsRouter.delete("/:id", async (req, res) => {
  const projectId = req.params.id;
  const deleted = await projectController.deleteProjectController(projectId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

export default projectsRouter;
