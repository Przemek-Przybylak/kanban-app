import express from "express";
import { Task, tasks } from "../data/tasks";
import * as taskController from "../controllers/tasksController";

const tasksRouter = express.Router();

tasksRouter.get("/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const tasks = await taskController.getTasksByProjectIdController({
    projectId,
  });
  res.json(tasks);
});

tasksRouter.post("/", async (req, res) => {
  const { addedTask } = req.body;
  const newTask = await taskController.createTaskController({ addedTask });
  res.status(201).json(newTask);
});

tasksRouter.delete("/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await taskController.deleteTaskController(taskId);
  res.status(204).send();
});

tasksRouter.put("/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const newData = req.body;
  const updatedTask = await taskController.editTaskController(taskId, newData);
  res.json(updatedTask);
});

export default tasksRouter;
