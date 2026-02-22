"use client";

import { useState } from "react";
import LightningIcon from "./Icons/LightningIcon";
import TaskIcon from "./Icons/TaskIcon";
import InboxIcon from "./Icons/InboxIcon";
import ChatList from "./ChatComponents/ChatList";
import ChatModal from "./ChatComponents/ChatModal";
import TaskList from "./TaskComponents/TaskList";

type Mode = "hover" | "task" | "inbox";

export default function FloatingMenu() {
  const [mode, setMode] = useState<Mode>("hover");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const openTask = () => {
    setMode("task");
  };

  const openInbox = () => {
    setMode("inbox");
  };

  const backToHover = () => {
    setMode("hover");
    setSelectedChat(null);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* ================= PANEL ================= */}
        {mode !== "hover" && (
          <div className="absolute bottom-24 right-0 transition-all duration-300 ease-in-out">
            {mode === "task" ? (
              <TaskList />
            ) : (
              <>
                <ChatList onSelect={setSelectedChat} />
                {selectedChat && (
                  <ChatModal chatId={selectedChat} onClose={() => setSelectedChat(null)} />
                )}
              </>
            )}
          </div>
        )}

        {/* ================= ICON AREA ================= */}
        {mode === "hover" && (
          <div className="flex group relative">
            <TaskIcon
              onclick={openTask}
              size={60}
              label="Task"
              className="
                absolute right-0
                opacity-0 translate-x-0
                group-hover:-translate-x-10
                group-hover:opacity-100
                transition-all duration-300 ease-in-out
              "
            />

            <InboxIcon
              onclick={openInbox}
              size={60}
              label="Inbox"
              className="
                absolute right-0
                opacity-0 translate-x-0
                group-hover:-translate-x-5
                group-hover:opacity-100
                transition-all duration-300 ease-in-out
              "
            />

            <LightningIcon size={68} />
          </div>
        )}

        {mode === "task" && (
          <div className="flex items-center gap-6">
            <InboxIcon onclick={openInbox} size={60} />

            <TaskIcon
              onclick={() => {
                backToHover();
              }}
              TaskMode
              size={68}
            />
          </div>
        )}

        {mode === "inbox" && (
          <div className="flex items-center gap-6">
            <TaskIcon onclick={openTask} size={60} />

            <InboxIcon
              onclick={() => {
                backToHover();
              }}
              InboxMode
              size={68}
            />
          </div>
        )}
      </div>
    </div>
  );
}
