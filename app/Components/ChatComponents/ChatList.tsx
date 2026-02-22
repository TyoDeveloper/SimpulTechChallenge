"use client";

import { useEffect, useState } from "react";
import LoadingPanel from "../Common/LoadingPanel";

type User = {
  id: number;
  name: string;
  company: {
    name: string;
  };
};

export default function ChatList({ onSelect }: { onSelect: (id: number) => void }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Failed to fetch users");

        const data: User[] = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 800));

        setUsers(data.slice(0, 6));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-[708px] h-[726px] bg-[#f3f3f3] rounded-lg shadow-lg p-4 flex flex-col">
      {/* SEARCH */}
      <div className="mb-4 relative">
        <input
          placeholder="Search"
          className="w-full border border-gray-400 rounded px-4 py-2 text-sm bg-white"
        />
        <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
      </div>

      {/* CONTENT AREA (flex-1 supaya tinggi konsisten) */}
      <div className="flex-1 overflow-y-auto">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <LoadingPanel text="Loading Chats..." />
          </div>
        )}

        {error && (
          <div className="h-full flex items-center justify-center text-red-500 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && (
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

                  {index === 0 && <div className="w-2.5 h-2.5 bg-red-500 rounded-full mt-2" />}
                </div>

                {index !== users.length - 1 && <div className="border-b border-gray-400 mt-4" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
