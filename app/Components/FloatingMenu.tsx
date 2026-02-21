"use client";

import { useState } from "react";
import LightningIcon from "./Icons/LightningIcon";
import TaskIcon from "./Icons/TaskIcon";
import InboxIcon from "./Icons/InboxIcon";
import ChatList from "./ChatComponents/ChatList";
import ChatModal from "./ChatComponents/ChatModal";
import TaskList from "./TaskComponents/TaskList";

export default function FloatingMenu() {
  const [isHoverable, setIsHoverable] = useState(true);
  const [isTaskMode, setIsTaskMode] = useState(false);
  const [isInboxMode, setIsInboxMode] = useState(false);
  const [additionalClassName, setAdditionalClassName] = useState("");

  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const TaskIconClick = () => {
    setIsTaskMode(true);
    setIsInboxMode(false);
    setIsHoverable(false);
    isInboxMode && (setIsTaskMode(true), setIsInboxMode(false));
  };

  const InboxIconClick = () => {
    setAdditionalClassName("translate-x-full transition-all duration-500 ease-in-out");
    setIsTaskMode(false);
    setIsInboxMode(true);
    setIsHoverable(false);
    isTaskMode && (setIsTaskMode(false), setIsInboxMode(true));
  };
  return (
    <div className="fixed bottom-8 right-8">
      <div className={`relative items-center group`}>
        {/* MAIN BUTTON */}
        {isHoverable ? (
          <div className="flex">
            <TaskIcon
              onclick={TaskIconClick}
              size={60}
              label="Task"
              className="
                absolute
                right-0
                opacity-0
                translate-x-0
                group-hover:-translate-x-8
                group-hover:opacity-100
              "
            />

            <InboxIcon
              onclick={InboxIconClick}
              size={60}
              label="Inbox"
              className="
                absolute
                right-0
                opacity-0
                translate-x-0
                group-hover:-translate-x-4
                group-hover:opacity-100
              "
            />
            <LightningIcon size={68} />
          </div>
        ) : isTaskMode ? (
          <>
            {/* Panel */}
            <div className="absolute right-20 bottom-20">
              <TaskList />
            </div>

            {/* Icon Group */}
            <div className="flex items-center">
              <InboxIcon
                onclick={InboxIconClick}
                InboxMode={isInboxMode}
                size={isInboxMode ? 68 : 60}
                className="mr-6"
              />
              <TaskIcon TaskMode={isTaskMode} size={isTaskMode ? 68 : 60} />
            </div>
          </>
        ) : isInboxMode ? (
          <>
            <div className="h-screen relative">
              {/* Chat List Panel */}
              <div className="absolute right-10 top-[233]">
                <ChatList onSelect={setSelectedChat} />
              </div>

              {/* Modal */}
              {selectedChat && (
                <div className="absolute right-10 top-[233]">
                  <ChatModal chatId={selectedChat} onClose={() => setSelectedChat(null)} />
                </div>
              )}
            </div>
            <div className="flex">
              <TaskIcon
                onclick={TaskIconClick}
                TaskMode={isTaskMode}
                size={isTaskMode ? 68 : 60}
                className="mr-[31]"
              />
              <InboxIcon InboxMode={isInboxMode} size={isInboxMode ? 68 : 60} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
