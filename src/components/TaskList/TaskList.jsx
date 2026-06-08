import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-box border border-dashed border-base-300 bg-base-100 p-8 text-center shadow-sm">
        <p className="font-medium">No tasks available.</p>
        <p className="mt-1 text-sm opacity-60">Try another filter or add a new task.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default TaskList;
