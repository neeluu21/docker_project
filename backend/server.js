const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const services = [
  { name: "API", status: "Running", port: 5000 },
  { name: "Frontend", status: "Running", port: 80 },
  { name: "Database", status: "Running", port: 27017 },
  { name: "Redis", status: "Running", port: 6379 }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", service: "DevOpsPulse API" });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    totalServices: 12,
    healthyServices: 11,
    services
  });
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.listen(5000, "0.0.0.0", () => {
  console.log("DevOpsPulse backend running on port 5000");
});