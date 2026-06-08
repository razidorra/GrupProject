import { useState } from "react";

function TaskForm({ addTask }) {
  // there will be4 boxes and each box remembers what's typed in one field.
  const [title, setTitle] = useState(""); //"" means will start empty.
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("open");

  // runs when the form is sent
  function handleSubmit(e) {
    e.preventDefault(); // there will be no reloading
    if (title.trim() === "") return; // if there is no "title" will stop here

    // make the new task from the 4 boxes
    addTask({
      id: Date.now(),
      title: title,
      description: description,
      assignee: assignee,
      status: status,
    });

    // empty the boxes again
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("open");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm sm:p-5"
    >
      {/* "input" + "input-bordered" are DaisyUI classes that style the box for you */}
      <div className="grid gap-3 lg:grid-cols-[1.2fr_1.6fr_1fr_12rem_auto]">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="input input-bordered w-full"
        />
        {/* "select" is the DaisyUI dropdown style */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {/* "btn btn-primary" = DaisyUI's blue button, hover built in */}
        <button type="submit" className="btn btn-primary w-full lg:w-auto">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
