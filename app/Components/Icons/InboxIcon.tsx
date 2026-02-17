"use client";

type Props = {
  size?: number;
  className?: string;
  label?: string;
};

export default function InboxIcon({ size = 48, className = "", label = "" }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      {/* LABEL */}
      <span
        className="
          absolute -top-8 left-1/2 -translate-x-1/2
          whitespace-nowrap
          text-sm font-medium text-gray-700
          opacity-0 translate-y-2
          transition-all duration-300 delay-300 ease-out
          group-hover:opacity-100
          group-hover:-translate-y-6
          group-hover:-translate-x-30

        "
      >
        {label}
      </span>

      {/* ICON */}
      <div
        style={{ width: size, height: size }}
        className={`
          flex items-center justify-center
          rounded-full bg-gray-200
          shadow-lg
          transition-all duration-300 ease-out
          ${className}
        `}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M3 7H21L19 19H5L3 7Z" stroke="#6C5DD3" strokeWidth="2" strokeLinejoin="round" />
          <path d="M3 7L8 13H16L21 7" stroke="#6C5DD3" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
