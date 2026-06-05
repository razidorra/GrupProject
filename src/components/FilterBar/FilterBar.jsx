function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="flex gap-2 my-4 flex-wrap">
      {/* Each button calls onFilterChange with its filter value when clicked */}
      {/* If this button is the active one, it gets btn-primary style, otherwise btn-outline */}

      <button
        onClick={() => onFilterChange("all")}
        className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline"}`}
      >
        All
      </button>

      <button
        onClick={() => onFilterChange("open")}
        className={`btn btn-sm ${filter === "open" ? "btn-primary" : "btn-outline"}`}
      >
        Open
      </button>

      <button
        onClick={() => onFilterChange("in-progress")}
        className={`btn btn-sm ${filter === "in-progress" ? "btn-primary" : "btn-outline"}`}
      >
        In Progress
      </button>

      <button
        onClick={() => onFilterChange("done")}
        className={`btn btn-sm ${filter === "done" ? "btn-primary" : "btn-outline"}`}
      >
        Done
      </button>
    </div>
  );
}

export default FilterBar;
