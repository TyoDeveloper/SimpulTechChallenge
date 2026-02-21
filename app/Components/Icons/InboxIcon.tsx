"use client";

type Props = {
  size?: number;
  className?: string;
  label?: string;
  onclick?: () => void;
  InboxMode?: boolean;
};

export default function InboxIcon({
  onclick,
  InboxMode,
  size = 48,
  className = "",
  label = "",
}: Props) {
  return (
    <div onClick={onclick} className="relative flex items-center justify-center">
      {/* LABEL */}
      <span
        className="
          absolute -top-8 left-1/2 -translate-x-1/2
          whitespace-nowrap
          text-sm font-medium text-gray-700
          opacity-0 translate-y-2
          transition-all duration-300 delay-300 ease-out
          group-hover:opacity-100
          group-hover:-translate-x-8

        "
      >
        {label}
      </span>

      {/* ICON */}

      {InboxMode && (
        <div
          style={{ width: size, height: size }}
          className={`
          bg-[#4F4F4F] rounded-full absolute -left-[15px] top-0
        `}
        ></div>
      )}
      <div
        style={{ width: size, height: size }}
        className={`
          relative z-10
          flex items-center justify-center
          rounded-full   ${InboxMode ? "bg-[#6C5DD3]" : "bg-gray-200"}

          shadow-lg
          transition-all duration-300 ease-out
          ${className}
        `}
      >
        {InboxMode ? (
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1482 2.51843H3.77779C3.0852 2.51843 2.51853 3.0851 2.51853 3.77769V21.4073L7.55557 16.3703H20.1482C20.8408 16.3703 21.4074 15.8036 21.4074 15.111V3.77769C21.4074 3.0851 20.8408 2.51843 20.1482 2.51843ZM18.8889 5.03686V13.8517H6.5104L5.76743 14.5946L5.03706 15.325V5.03686H18.8889ZM23.9259 7.55549H26.4445C27.1371 7.55549 27.7037 8.12216 27.7037 8.81475V27.7036L22.6667 22.6666H8.81483C8.12223 22.6666 7.55557 22.0999 7.55557 21.4073V18.8888H23.9259V7.55549Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 7H21L19 19H5L3 7Z"
              stroke="#6C5DD3"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M3 7L8 13H16L21 7" stroke="#6C5DD3" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
