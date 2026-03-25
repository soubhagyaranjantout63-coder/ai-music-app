import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">

      {/* LOGO */}
      <h1 className="text-green-400 text-xl font-bold cursor-pointer">
        🎵 MusicAI
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-green-400">
          Home
        </Link>

        {user ? (
          <>
            {/* USER NAME */}
            <span className="text-green-400 font-medium">
              👤 {user}
            </span>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>

            <Link
              to="/register"
              className="border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black"
            >
              Register
            </Link>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;