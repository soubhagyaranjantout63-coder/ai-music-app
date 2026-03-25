import dotenv from "dotenv";
dotenv.config();  // 🔥 FIRST LINE

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import musicRoutes from "./routes/musicRoutes.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use ("/api/music", musicRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🔥 DEBUG
console.log("ENV TEST 👉", process.env.YOUTUBE_API_KEY);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

