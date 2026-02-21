export default function NewMessageDivider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-red-400" />
      <span className="text-xs text-red-500 font-semibold">New Message</span>
      <div className="flex-1 h-px bg-red-400" />
    </div>
  );
}
