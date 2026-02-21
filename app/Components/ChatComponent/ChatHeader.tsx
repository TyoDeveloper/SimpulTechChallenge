export default function ChatHeader({ id }: { id: string }) {
  return (
    <div className="border-b p-4">
      <h2 className="font-semibold text-blue-600">I-589 - User #{id} [Affirmative Filing]</h2>
      <p className="text-sm text-gray-500">3 Participants</p>
    </div>
  );
}
