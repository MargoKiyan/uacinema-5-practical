import process from "node:process";
import express from "express";
import { message } from "./index.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/message", (_req, res) => {
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
