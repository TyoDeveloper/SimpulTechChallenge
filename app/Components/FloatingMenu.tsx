"use client";

import { useState } from "react";
import LightningIcon from "./Icons/LightningIcon";
import TaskIcon from "./Icons/TaskIcon";
import InboxIcon from "./Icons/InboxIcon";

export default function FloatingMenu() {
  const [isHoverable, setIsHoverable] = useState(true);
  const [isTaskMode, setIsTaskMode] = useState(false);
  const [isInboxMode, setIsInboxMode] = useState(false);
  let additionalClassName: string = "";

  const TaskIconClick = () => {
    setIsTaskMode(true);
    setIsInboxMode(false);
    setIsHoverable(false);
    isInboxMode && (setIsTaskMode(true), setIsInboxMode(false));
  };

  const InboxIconClick = () => {
    additionalClassName = "translate-x-full transition-all duration-500 ease-in-out";
    setIsTaskMode(false);
    setIsInboxMode(true);
    setIsHoverable(false);
    isTaskMode && (setIsTaskMode(false), setIsInboxMode(true));
  };

  return (
    <div className="fixed bottom-8 right-8">
      <div className="relative flex items-center group">
        {/* MAIN BUTTON */}
        {isHoverable ? (
          <>
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
            <LightningIcon size={68} onMouseEnter={null} onMouseLeave={null} />
          </>
        ) : isTaskMode ? (
          <>
            <InboxIcon
              onclick={InboxIconClick}
              InboxMode={isInboxMode}
              size={isInboxMode ? 68 : 60}
              className={`mr-[31] ${additionalClassName}`}
            />
            <TaskIcon TaskMode={isTaskMode} size={isTaskMode ? 68 : 60} />
          </>
        ) : isInboxMode ? (
          <>
            <TaskIcon
              onclick={TaskIconClick}
              TaskMode={isTaskMode}
              size={isTaskMode ? 68 : 60}
              className="mr-[31]"
            />
            <InboxIcon InboxMode={isInboxMode} size={isInboxMode ? 68 : 60} />
          </>
        ) : null}
      </div>
    </div>
  );
}
