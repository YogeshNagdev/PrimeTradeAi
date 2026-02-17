import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 w-96 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="bg-blue-600 text-white w-full p-2 rounded">
            Register
          </button>

        </form>

        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>

      </div>
    </div>
  );
}
