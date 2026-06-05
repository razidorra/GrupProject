function TaskItem({ task, onStatusChange, onDelete }) {
  // Helper function: returns a Tailwind badge color based on the status
  function getStatusColor(status) {
    if (status === "open") return "badge-warning"; // yellow
    if (status === "in-progress") return "badge-info"; // blue
    if (status === "done") return "badge-success"; // green
    return "badge-neutral"; // fallback
  }

  return (
    <div className="card bg-base-100 shadow-md p-4 flex flex-col gap-2">
      {/* Top row: title on the left, status badge on the right */}
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{task.title}</h3>
        <span className={`badge ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>

      {/* Description text */}
      <p className="text-sm opacity-70">{task.description}</p>

      {/* Assigned person */}
      <p className="text-sm">👤 {task.assignee}</p>

      {/* Action buttons at the bottom */}
      <div className="flex gap-2 mt-2">
        {/* Clicking this calls onStatusChange with the task's id */}
        {/* App.jsx will then cycle the status: open → in-progress → done → open */}
        <button
          onClick={() => onStatusChange(task.id)}
          className="btn btn-sm btn-outline"
        >
          Next Status
        </button>

        {/* Clicking this calls onDelete with the task's id */}
        {/* App.jsx will then remove this task from the list */}
        <button
          onClick={() => onDelete(task.id)}
          className="btn btn-sm btn-error btn-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
