"use client";

type LoadingPanelProps = {
  text: string;
};

export default function LoadingPanel({ text }: LoadingPanelProps) {
  return (
    <div className="w-[420px] h-[520px] bg-white rounded-2xl shadow-xl flex flex-col">
      {/* HEADER PLACEHOLDER */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="w-28 h-8 bg-gray-200 rounded animate-pulse" />
        <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* BODY */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-6"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium">{text}</p>
      </div>
    </div>
  );
}
