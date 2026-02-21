export default function DateDivider({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="text-xs text-gray-500">{date}</span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
