import express from "express";
import * as taskController from "../controllers/tasksController";

const tasksRouter = express.Router();

tasksRouter.get("/:projectId", async (req, res, next) => {
  const projectId = req.params.projectId;
  try {
    const tasks = await taskController.getTasksByProjectIdController({
      projectId,
    });

    if (tasks) {
      res.json(tasks);
    } else {
      return next(new Error("Tasks not found for the given project"));
    }
  } catch (error) {
    next(error);
  }
});

tasksRouter.post("/:projectId", async (req, res, next) => {
  const projectId = req.params.projectId;
  const { addedTask } = req.body;
  try {
    const newTask = await taskController.createTaskController({
      addedTask,
      projectId,
    });
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

tasksRouter.delete("/:taskId", async (req, res, next) => {
  const taskId = req.params.taskId;
  try {
    const deleted = await taskController.deleteTaskController(taskId);

    if (deleted) {
      res.status(204).send();
    } else {
      return next(new Error("Task not found"));
    }
  } catch (error) {
    next(error);
  }
});

tasksRouter.put("/:taskId", async (req, res, next) => {
  const taskId = req.params.taskId;
  const newData = req.body;

  try {
    const updatedTask = await taskController.editTaskController(
      taskId,
      newData
    );

    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      return next(new Error("Task not found or update failed"));
    }
  } catch (error) {
    next(error);
  }
});

export default tasksRouter;
