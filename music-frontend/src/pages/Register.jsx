import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      console.log(res.data); // DEBUG
      alert(res.data.msg || "Registered successfully ✅");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">

      <div className="flex w-[800px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
            alt="music"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 text-white">

          <h2 className="text-3xl font-bold mb-6 text-green-400">
            🎶 Create Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="p-3 rounded-full bg-gray-800 outline-none border border-gray-700"
            />

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
              Register
            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-gray-400 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 hover:underline">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;