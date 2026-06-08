const filters = [
  { label: "All", value: "all" },
  { label: "Open", value: "open" },
  { label: "In Progress", value: "in-progress" },
  { label: "Done", value: "done" },
];

function FilterBar({ filter, tasks, onFilterChange }) {
  function getCount(value) {
    if (value === "all") return tasks.length;

    return tasks.filter((task) => task.status === value).length;
  }

  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            className={`btn btn-sm justify-between gap-3 sm:min-w-32 ${
              filter === item.value ? "btn-primary" : "btn-ghost"
            }`}
          >
            <span className="truncate">{item.label}</span>
            <span className="badge badge-sm">{getCount(item.value)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
