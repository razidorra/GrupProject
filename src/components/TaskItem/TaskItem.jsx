function TaskItem({ task, onStatusChange, onDelete }) {
  // Helper function: returns a Tailwind badge color based on the status
  function getStatusColor(status) {
    if (status === "open") return "badge-warning"; // yellow
    if (status === "in-progress") return "badge-info"; // blue
    if (status === "done") return "badge-success"; // green
    return "badge-neutral"; // fallback
  }

  return (
    <article className="card h-full border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="card-body gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-base font-bold leading-snug sm:text-lg">
            {task.title}
          </h3>
          <span className={`badge shrink-0 ${getStatusColor(task.status)}`}>
          {task.status}
          </span>
        </div>

        <p className="min-h-10 break-words text-sm leading-6 opacity-70">
          {task.description || "No description added."}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <p className="text-sm font-medium opacity-80">
            Assigned to: {task.assignee || "Unassigned"}
          </p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              onClick={() => onStatusChange(task.id)}
              className="btn btn-sm btn-outline"
            >
              Next Status
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="btn btn-sm btn-error btn-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskItem;
