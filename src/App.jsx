import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskItem from "./components/TaskItem/TaskItem";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStatusChange = (id) => {
    const order = ["open", "in-progress", "done"];
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: order[(order.indexOf(task.status) + 1) % order.length],
            }
          : task,
      ),
    );
  };

  // Delete
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Filtered tasks derived from state
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;

  {
    /* Load demo tasks from JSONPlaceholder on mount */
  }
  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const mapped = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          description: "Imported demo task",
          assignee: "Demo User",
          status: todo.completed ? "done" : "open",
        }));
        setTasks(mapped);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []); // empty array = runs once on mount

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <Header total={total} done={done} />
      </div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDeleteTask}
      />
      <TaskItem
        task={{
          id: 999,
          title: "Example Task",
          description: "This is an example task description.",
          assignee: "John Doe",
          status: "open",
        }}
        onStatusChange={() => {}}
        onDelete={() => {}}
      />
    </>
  );
}


export default App;
