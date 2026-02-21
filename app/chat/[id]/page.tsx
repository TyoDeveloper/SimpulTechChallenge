"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import ChatHeader from "../../Components/ChatComponent/ChatHeader";
import ChatMessage from "../../Components/ChatComponent/ChatMessage";
import DateDivider from "../../Components/ChatComponent/DateDevider";
import NewMessageDivider from "../../Components/ChatComponent/NewMessageDevider";

export default function ChatRoom() {
  const { id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [showNewDivider, setShowNewDivider] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      const data = await res.json();
      setMessages(data.slice(0, 5));
    }

    fetchMessages();
  }, [id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input) return;

    const newMessage = {
      id: Date.now(),
      body: input,
      email: "you@mail.com",
      time: "19:32",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setShowNewDivider(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded-lg flex flex-col h-[650px]">
      <ChatHeader id={id as string} />

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <DateDivider date="Today June 09, 2021" />

        {messages.map((msg, index) => {
          const isYou = msg.email === "you@mail.com";

          return (
            <div key={msg.id}>
              {showNewDivider && index === messages.length - 1 && <NewMessageDivider />}

              <ChatMessage body={msg.body} isYou={isYou} time={msg.time || "19:32"} />
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
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
