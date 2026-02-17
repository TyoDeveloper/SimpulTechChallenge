"use client";

type Props = {
  size?: number;
  className?: string;
  label?: string;
};

export default function TaskIcon({ size = 48, className = "", label = "" }: Props) {
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
          group-hover:-translate-x-50

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
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33331 3.88892H23.3333C24.5555 3.88892 25.5555 4.88892 25.5555 6.11114V20.5556C25.5555 21.7778 24.5555 22.7778 23.3333 22.7778H3.33331C2.11108 22.7778 1.11108 21.7778 1.11108 20.5556V6.11114C1.11108 4.88892 2.11108 3.88892 3.33331 3.88892ZM3.33331 6.11114V20.5556H12.2222V6.11114H3.33331ZM23.3333 20.5556H14.4444V6.11114H23.3333V20.5556ZM22.2222 10H15.5555V11.6667H22.2222V10ZM15.5555 12.7778H22.2222V14.4445H15.5555V12.7778ZM22.2222 15.5556H15.5555V17.2222H22.2222V15.5556Z"
            fill="#F8B76B"
          />
        </svg>
      </div>
    </div>
  );
}
