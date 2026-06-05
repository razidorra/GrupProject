# Team Task Board - Todo List

Status: Current project state

## Currently present

- [x] Vite/React project is created
- [x] Dependencies are installed
- [x] Dev server can be started with `npm run dev`
- [x] Tailwind CSS is integrated
- [x] DaisyUI is integrated
- [x] `src/App.css` is empty
- [x] `src/index.css` imports Tailwind and DaisyUI
- [x] Components folder is created
- [x] `Header.jsx` is created
- [x] `Header` is imported and rendered in `App.jsx`
- [x] `Header` receives the props `total` and `done`
- [x] Base layout in `App.jsx` is prepared

## Current state of files

- [x] `src/App.jsx` renders the Header and a prepared main layout
- [x] `src/components/Header/Header.jsx` contains title, description and stats display
- [ ] `src/components/TaskForm/TaskForm.jsx` is still empty
- [ ] `src/components/TaskList/TaskList.jsx` is still empty
- [ ] `src/components/TaskItem/TaskItem.jsx` is still empty
- [ ] `src/components/FilterBar/FilterBar.jsx` is still empty

## Important: Styling decision

The project currently uses Tailwind CSS and DaisyUI directly in `className` attributes. Therefore, CSS modules like `Header.module.css` or `TaskForm.module.css` are not needed at this stage.

- [x] Use Tailwind/DaisyUI for styling
- [ ] Style components consistently with Tailwind/DaisyUI
- [ ] Add additional global styles in `App.css` or `index.css` later if needed

## Next sensible step: State in `App.jsx`

- [ ] Import `useState` from React
- [ ] Create `tasks` state:

  ```js
  const [tasks, setTasks] = useState([]);
  ```

- [ ] Create `filter` state:

  ```js
  const [filter, setFilter] = useState("all");
  ```

- [ ] Create `isLoading` state:

  ```js
  const [isLoading, setIsLoading] = useState(false);
  ```

- [ ] Create `error` state:

  ```js
  const [error, setError] = useState("");
  ```

- [ ] Compute `total` from `tasks.length`
- [ ] Compute `done` from completed tasks
- [ ] Pass computed values to `Header`

## TaskForm component

- [ ] Build a form with fields: Title, Description, Assignee, Status
- [ ] Manage local form state with `useState`
- [ ] Write `onChange` handlers
- [ ] Write `onSubmit` handler
- [ ] Validation: do not allow empty title
- [ ] Show error message for empty title
- [ ] Clear form after successful submit
- [ ] Accept `onAdd` as a prop
- [ ] Implement `addTask` function in `App.jsx`
- [ ] Render `TaskForm` in `App.jsx`
- [ ] Style the form with Tailwind/DaisyUI

## TaskList and TaskItem

- [ ] Create `TaskList.jsx` with props `tasks`, `onStatusChange`, `onDelete`
- [ ] Render tasks using `map()`
- [ ] Give each `TaskItem` a `key={task.id}`
- [ ] Show a message when no tasks exist
- [ ] Create `TaskItem.jsx` with Title, Description, Assignee and Status
- [ ] Display a status badge
- [ ] Create a status button: `open -> in-progress -> done -> open`
- [ ] Create a delete button
- [ ] Implement `changeStatus` function in `App.jsx`
- [ ] Implement `deleteTask` function in `App.jsx`
- [ ] Render `TaskList` in `App.jsx`
- [ ] Style task cards with Tailwind/DaisyUI

## FilterBar component

- [ ] Create filter buttons: All, Open, In Progress, Done
- [ ] Visually highlight the active filter
- [ ] Accept `filter` and `setFilter` as props
- [ ] Compute filtered tasks in `App.jsx`
- [ ] Pass filtered list to `TaskList`
- [ ] Render `FilterBar` in `App.jsx`
- [ ] Style FilterBar with Tailwind/DaisyUI

## API and useEffect

- [ ] Import `useEffect` from React
- [ ] Call API:

  ```txt
  https://jsonplaceholder.typicode.com/todos?_limit=5
  ```

- [ ] Convert loaded data into our task structure:

  ```js
  {
    id,
    title,
    description: "Imported demo task",
    assignee: "Demo User",
    status: todo.completed ? "done" : "open"
  }
  ```

- [ ] Set `isLoading` to `true` before fetch
- [ ] Set `isLoading` to `false` after fetch
- [ ] Set `error` on failure
- [ ] Use correct dependency array:

  ```js
  useEffect(() => {
    // fetch tasks
  }, []);
  ```

- [ ] Prepare fallback data if API is not reachable

## Conditional rendering

- [ ] Show loading message when `isLoading === true`
- [ ] Show error message when `error !== ""`
- [ ] Show empty list message when no tasks exist
- [ ] Color status badge differently depending on status

## Polish

- [ ] Check layout on desktop
- [ ] Check layout on mobile
- [ ] Improve spacing between components
- [ ] Make buttons consistent
- [ ] Make status colors clearly distinguishable
- [ ] Remove unnecessary empty JSX blocks in `App.jsx`:

  ```jsx
  {}
  ```

- [ ] Final check with:

  ```bash
  npm run build
  ```

## Optional features

- [ ] Count tasks by status and display
- [ ] Button to reset to demo data
- [ ] Search by title
- [ ] Save tasks in `localStorage`
- [ ] Sort by status
- [ ] Dark/Light toggle

## Presentation prep

- [ ] Which components were created?
- [ ] Where are props used?
- [ ] Where is state used?
- [ ] Which events does the app handle?
- [ ] Where is `useEffect` used?
- [ ] What errors occurred and how were they solved?
- [ ] What can be improved later?
