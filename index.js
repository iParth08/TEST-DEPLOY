import express from "express";
import dotenv from "dotenv";

const PORT = 5000;

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send(`This is a secret ${process.env.SECRET_KEY}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
