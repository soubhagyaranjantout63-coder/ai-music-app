import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Music from "./pages/Music";


function App() {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/music" element={<Music />} />
        </Routes>
        

        <Footer />

      </div>
    </Router>
  );
}

export default App;