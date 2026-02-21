"use client";

import { useEffect, useRef, useState } from "react";
import ChatHeader from "../Components/ChatComponent/ChatHeader";
import ChatMessage from "../Components/ChatComponent/ChatMessage";
import DateDivider from "../Components/ChatComponent/DateDevider";
import NewMessageDivider from "../Components/ChatComponent/NewMessageDevider";

export default function ChatModal({ chatId, onClose }: { chatId: number; onClose: () => void }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [showNewDivider, setShowNewDivider] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${chatId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data.slice(0, 5)));
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        body: input,
        email: "you@mail.com",
      },
    ]);

    setShowNewDivider(true);
    setInput("");
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed right-20 top-20 w-[450px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
        <ChatHeader id={chatId.toString()} />

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <DateDivider date="Today June 09, 2021" />

          {messages.map((msg, index) => {
            const isYou = msg.email === "you@mail.com";

            return (
              <div key={msg.id}>
                {showNewDivider && index === messages.length - 1 && <NewMessageDivider />}

                <ChatMessage body={msg.body} isYou={isYou} time="19:32" />
              </div>
            );
          })}

          <div ref={bottomRef} />
        </div>

        <div className="border-t p-3 flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2 text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a new message"
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
