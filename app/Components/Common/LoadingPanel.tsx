"use client";

type LoadingPanelProps = {
  text: string;
};

export default function LoadingPanel({ text }: LoadingPanelProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-6"></div>

      {/* Text */}
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  );
}
