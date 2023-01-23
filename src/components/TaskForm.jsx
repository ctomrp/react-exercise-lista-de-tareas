import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-gray-50 px-3 w-full mb-2 text-gray-800 font-bold rounded-md"
          autoFocus
        />
        <textarea
          className="bg-gray-50 px-3 w-full mb-2 text-gray-900 font-semibold rounded-md"
          placeholder="Escribe los detalles de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-sky-500 px-3 py-1 rounded-md mt-4 hover:bg-sky-400 text-white font-bold">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
