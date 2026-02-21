"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (task: any) => void;
}

export default function TaskModal({ isOpen, onClose, onAdd }: TaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!title) return alert("Title required");

    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          completed: false,
          dueDate: date,
          description,
        }),
      });

      const data = await res.json();
      onAdd(data);
      onClose();
      setTitle("");
      setDescription("");
      setDate(new Date());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-xl p-6">
        <h2 className="text-lg font-semibold mb-4">New Task</h2>

        <input
          type="text"
          placeholder="Type Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />

        <DatePicker
          selected={date}
          onChange={(d: Date | null) => setDate(d)}
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />

        <textarea
          placeholder="No Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">
            Cancel
          </button>

          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
