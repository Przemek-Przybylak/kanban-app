import express from "express";
import * as projectController from "../controllers/projectControllers";

const projectsRouter = express.Router();

projectsRouter.get("/", async (req, res, next) => {
  try {
    const projects = await projectController.getProjectsController();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

projectsRouter.get("/:id", async (req, res, next) => {
  const projectId = req.params.id;
  try {
    const project = await projectController.getProjectController({ projectId });
    if (project) {
      res.json(project);
    } else {
      return next(new Error("Project not found"));
    }
  } catch (error) {
    next(error);
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

projectsRouter.put("/:id", async (req, res, next) => {
  const projectId = req.params.id;
  const newData = req.body;

  try {
    const updatedProject = await projectController.editProjectController(
      projectId,
      newData
    );
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      return next(new Error("Project not found or update failed"));
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.delete("/:id", async (req, res, next) => {
  const projectId = req.params.id;
  try {
    const deleted = await projectController.deleteProjectController(projectId);
    if (deleted) {
      res.status(204).send();
    } else {
      return next(new Error("Project not found"));
    }
  } catch (error) {
    next(error);
  }
});

export default projectsRouter;
