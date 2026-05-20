const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
connectDB();
const app = express();
const protectedRoutes = require("./routes/protectedRoutes");
const fileRoutes = require("./routes/fileRoutes");
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/files", fileRoutes);
app.get("/", (req, res) => {
  res.send("CloudVault API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});