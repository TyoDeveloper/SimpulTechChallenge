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
    <div className="w-[520px] bg-[#f3f3f3] rounded-lg shadow-lg p-4">
      {/* SEARCH */}
      <div className="mb-4 relative">
        <input
          placeholder="Search"
          className="w-full border border-gray-400 rounded px-4 py-2 text-sm bg-white"
        />
        <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
      </div>

      {/* CHAT ITEMS */}
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            onClick={() => onSelect(user.id)}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded transition"
          >
            <div className="flex items-start gap-3">
              {/* AVATAR */}
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {user.name.charAt(0)}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-blue-600 font-semibold text-sm">
                    {user.id} - {user.company.name}
                  </p>
                  <p className="text-xs text-gray-600">01/06/2021 12:19</p>
                </div>

                <p className="text-sm text-gray-800">{user.name}</p>

                <p className="text-xs text-gray-600 truncate">Please check this out!</p>
              </div>

              {/* UNREAD DOT */}
              {index === 0 && <div className="w-2.5 h-2.5 bg-red-500 rounded-full mt-2" />}
            </div>

            {/* DIVIDER */}
            {index !== users.length - 1 && <div className="border-b border-gray-400 mt-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}
