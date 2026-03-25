import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // ✅ token store
      localStorage.setItem("token", res.data.token);

      // ✅ name store (IMPORTANT)
      localStorage.setItem("name", res.data.name);

      alert("Login successful ✅");

      // ✅ redirect to home
      navigate("/");

      // ✅ force UI refresh (navbar update)
      window.location.reload();

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.msg || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">

      <div className="flex w-[800px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="music"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 text-white">

          <h2 className="text-3xl font-bold mb-6 text-green-400">
            🎧 Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="p-3 rounded-full bg-gray-800 outline-none border border-gray-700"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="p-3 rounded-full bg-gray-800 outline-none border border-gray-700"
            />

            <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full font-semibold">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;