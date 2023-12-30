import cors from "cors";
import express from "express";

const app = express();
const port = 5050;

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello, World Wally!");
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;
