import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header total={0} done={0} />
      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">{/* <TaskForm /> */}</div>

        {}
        <div className="md:col-span-2 flex flex-col gap-4">
          {}
          {}
        </div>
      </main>
    </div>
  );
}

export default App;
