"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useModalStore } from "../../stores/useModalStore";
import { ModalWrapper } from "./ModalsWrapper";
import { useTasksStore } from "../../stores/useTasksStore";
import Input from "../Input/Input";
import { Task } from "../../types/task";
import { useParams } from "next/navigation";

export default function TaskFormModal() {
  const projectId = useParams().id as string;
  const { type, isOpen, closeModal, data } = useModalStore();
  const { addTask, editTask } = useTasksStore();

  const [assigneeInput, setAssigneeInput] = useState("");
  const [taskData, setTaskData] = useState<Task>({
    taskId: "",
    projectId,
    title: "",
    description: "",
    dueDate: "",
    status: "todo",
    assignees: [],
    approvedBy: "",
    project: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    if (type === "editTask" && data && "taskId" in data) {
      setTaskData(data as Task);
    }

    if (type === "addTask") {
      setTaskData({
        taskId: "",
        projectId,
        title: "",
        description: "",
        dueDate: "",
        status: "todo",
        assignees: [],
        approvedBy: "",
        project: "",
      });
    }
  }, [isOpen, type, data, projectId]);

  if (!isOpen || (type !== "addTask" && type !== "editTask")) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (type === "addTask") {
        await addTask({
          ...taskData,
          taskId: Math.random().toString(36).substring(2, 9),
        });
      } else if (type === "editTask") {
        await editTask(taskData.taskId, taskData);
      }

      closeModal();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleAddAssignee = () => {
    if (assigneeInput.trim() !== "") {
      setTaskData({
        ...taskData,
        assignees: [...taskData.assignees, assigneeInput.trim()],
      });
      setAssigneeInput("");
    }
  };

  const removeAssignee = (index: number) => {
    setTaskData({
      ...taskData,
      assignees: taskData.assignees.filter((_, i) => i !== index),
    });
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={closeModal}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {type === "addTask" ? "Add New Task" : "Edit Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Task title"
            type="text"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              value={taskData.description}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
            />
          </div>

          <Input
            label="Due Date"
            type="date"
            value={taskData.dueDate}
            onChange={(e) =>
              setTaskData({ ...taskData, dueDate: e.target.value })
            }
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={taskData.status}
              onChange={(e) =>
                setTaskData({
                  ...taskData,
                  status: e.target.value as Task["status"],
                })
              }
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex gap-2 items-end ">
            <Input
              label="Assignee"
              type="text"
              value={assigneeInput}
              onChange={(e) => setAssigneeInput(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddAssignee}
              className="self-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>

          {taskData.assignees.length > 0 && (
            <div className="bg-gray-50 p-3 rounded-md">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Assigned to:
              </h3>
              <ul className="space-y-1">
                {taskData.assignees.map((assignee, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white px-3 py-1 rounded"
                  >
                    <span>{assignee}</span>
                    <button
                      type="button"
                      onClick={() => removeAssignee(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Input
            label="Approved By"
            type="text"
            value={taskData.approvedBy}
            onChange={(e) =>
              setTaskData({ ...taskData, approvedBy: e.target.value })
            }
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
}
