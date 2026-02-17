"use client";

import LightningIcon from "./Icons/LightningIcon";
import TaskIcon from "./Icons/TaskIcon";
import InboxIcon from "./Icons/InboxIcon";

export default function FloatingMenu() {
  return (
    <div className="fixed bottom-8 right-8">
      <div className="relative flex items-center group">
        {/* TASK (lebih kiri) */}
        <TaskIcon
          size={48}
          label="Task"
          className="
        absolute
        right-0
        opacity-0
        translate-x-0
        group-hover:-translate-x-40
        group-hover:opacity-100
      "
        />

        {/* INBOX (lebih dekat ke lightning) */}
        <InboxIcon
          size={48}
          label="Inbox"
          className="
        absolute
        right-0
        opacity-0
        translate-x-0
        group-hover:-translate-x-20
        group-hover:opacity-100
      "
        />

        {/* MAIN BUTTON */}
        <LightningIcon size={68} />
      </div>
    </div>
  );
}
