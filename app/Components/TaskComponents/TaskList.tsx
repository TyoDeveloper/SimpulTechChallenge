"use client";

import { useEffect, useState } from "react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) =>
        setTasks(
          data.map((t: any) => ({
            ...t,
            description: "No Description",
          })),
        ),
      );
  }, []);

  const addTask = (task: any) => {
    setTasks((prev) => [
      {
        ...task,
        description: task.description || "No Description",
      },
      ...prev,
    ]);
  };

  return (
    <div className="bg-[#EDEDED] w-[500px] rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <select className="border px-3 py-1 text-sm rounded-md bg-white">
          <option>My Tasks</option>
        </select>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#4F8EF7] text-white text-sm px-4 py-1 rounded-md"
        >
          New Task
        </button>
      </div>

      {/* Scroll Area */}
      <div className="max-h-[400px] overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <TaskModal isOpen={open} onClose={() => setOpen(false)} onAdd={addTask} />
    </div>
  );
}
