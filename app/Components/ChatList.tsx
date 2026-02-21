"use client";

import { useEffect, useState } from "react";

export default function ChatList({ onSelect }: { onSelect: (id: number) => void }) {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 4)));
  }, []);

  return (
    <div className="w-[400px] bg-white rounded-lg shadow-lg p-4">
      <input placeholder="Search" className="w-full border rounded px-3 py-2 text-sm mb-4" />

      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => onSelect(user.id)}
          className="cursor-pointer border-b py-3 hover:bg-gray-100"
        >
          <p className="font-semibold text-blue-600">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}
