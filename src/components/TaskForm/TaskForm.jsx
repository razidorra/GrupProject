// TaskForm.jsx
import { useState } from "react"; 

function TaskForm({ addTask }) {
  // there will be4 boxes and each box remembers what's typed in one field.
  const [title, setTitle] = useState(""); //"" means will start empty.
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("open");

  // runs when the form is sent
  function handleSubmit(e) {
    e.preventDefault();              // there will be no reloading
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
    // flex flex-col = stack vertically / gap-2 = space between / max-w-md = max width
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md my-5">
      {/* "input" + "input-bordered" are DaisyUI classes that style the box for you */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered"
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input input-bordered"
      />
      <input
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        className="input input-bordered"
      />
      {/* "select" is the DaisyUI dropdown style */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="select select-bordered"
      >
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      {/* "btn btn-primary" = DaisyUI's blue button, hover built in */}
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;