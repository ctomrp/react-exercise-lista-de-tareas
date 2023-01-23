import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-black h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
