import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    await axios.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-green-600 text-white p-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      {tasks.map(task => (
        <div key={task._id} className="border p-3 mb-2 flex justify-between">
          {task.title}
          <button
            className="text-red-600"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}
