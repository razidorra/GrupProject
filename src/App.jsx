import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskForm from "./components/TaskForm/TaskForm";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  // State for the active filter button ("all", "open", "in-progress", "done")
  const [filter, setFilter] = useState("all");

  // Filtered tasks derived from state
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  // Toggle task status:
  // This function updates the status of a specific task and cycles it through three values
  // open -> in-progress -> done -> open
  const handleToggleStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          let nextStatus = "open";

          if (task.status === "open") {
            nextStatus = "in-progress";
          } else if (task.status === "in-progress") {
            nextStatus = "done";
          }

          return {
            id: task.id,
            title: task.title,
            status: nextStatus,
          };
        }

        return task;
      }),
    );
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add new task (used by TaskForm)
  function addTask(task) {
    const newTasks = [];

    newTasks.push(task);

    for (let i = 0; i < tasks.length; i++) {
      newTasks.push(tasks[i]);
    }

    setTasks(newTasks);
  }

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;

  {
    /* Load demo tasks from JSONPlaceholder on mount */
  }
  useEffect(() => {
    // 1. Define the async function inside the effect
    const getData = async () => {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );

        // Check if the response status is ok
        if (!data.ok) {
          throw new Error("Failed to fetch");
        }

        const taskArray = await data.json();

        const translations = {
          1: "Choose a preferred option",
          2: "Assign a responsible person for the task",
          3: "Resolve minor issues",
          4: "Review overdue items",
          5: "Refactor codebase for maintainability",
        };

        const mapped = taskArray.map((todo) => ({
          id: todo.id,
          title: translations[todo.id] || todo.title, // Use translation if available, otherwise fallback to original title
          description: "Imported demo task",
          assignee: "Demo User",
          status: todo.completed ? "done" : "open",
        }));

        setTasks(mapped);
        console.log("Fetched tasks:", mapped);
      } catch (error) {
        console.log(error);
      }
    };

    // 2. Call the function immediately
    getData();
  }, []); // Empty array = runs once on mount

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <Header total={total} done={done} />

        <TaskForm addTask={addTask} />

        <FilterBar filter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onStatusChange={handleToggleStatus}
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
      </div>
    </>
  );
}

export default App;
