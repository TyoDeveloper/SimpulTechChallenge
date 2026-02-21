"use client";

interface TaskCardProps {
  task: any;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="py-4 border-b last:border-b-0">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <input type="checkbox" defaultChecked={task.completed} className="mt-1 w-4 h-4" />

          <div>
            <p className="text-sm font-medium text-gray-800">{task.title}</p>

            {/* Date small box */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-2 border rounded-md px-2 py-1 text-xs text-gray-600">
                <span>📅</span>
                <span>12/06/2021</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 mt-2 max-w-[300px]">
              {task.description || "No Description"}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-right text-xs">
          <p className="text-red-500 font-medium">2 Days Left</p>
          <p className="text-gray-500">12/06/2021</p>
        </div>
      </div>
    </div>
  );
}
