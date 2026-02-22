"use client";

import { useEffect, useState } from "react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";
import LoadingPanel from "../Common/LoadingPanel";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  description: string;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=7");

        if (!res.ok) throw new Error("Failed to fetch tasks");

        const data = await res.json();

        // optional delay biar loading kelihatan
        await new Promise((resolve) => setTimeout(resolve, 800));

        setTasks(
          data.map((t: any) => ({
            ...t,
            description: "No Description",
          })),
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (task: Task) => {
    setTasks((prev) => [
      {
        ...task,
        description: task.description || "No Description",
      },
      ...prev,
    ]);
  };

  return (
    <div className="bg-[#EDEDED] w-[708px] h-[726px] rounded-md shadow-md p-4 flex flex-col">
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

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pr-2">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <LoadingPanel text="Loading Task List..." />
          </div>
        )}

        {error && (
          <div className="h-full flex items-center justify-center text-red-500 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>

      <TaskModal isOpen={open} onClose={() => setOpen(false)} onAdd={addTask} />
    </div>
  );
}
