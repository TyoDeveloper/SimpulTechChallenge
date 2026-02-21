export default function ChatMessage({
  body,
  isYou,
  time,
}: {
  body: string;
  isYou: boolean;
  time: string;
}) {
  return (
    <div className={`flex ${isYou ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-3 rounded-lg text-sm relative ${
          isYou ? "bg-purple-200 text-black" : "bg-yellow-100 text-black"
        }`}
      >
        {body}
        <div className="text-[10px] text-gray-500 mt-1 text-right">{time}</div>
      </div>
    </div>
  );
}
