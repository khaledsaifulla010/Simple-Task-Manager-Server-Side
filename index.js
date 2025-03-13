const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());

// Server Running //
app.get("/", (req, res) => {
  res.send("Simple Task Manager Server is running on Port 5000");
});
app.listen(process.env.PORT, () => {
  console.log(
    `Simple Task Manager Server is running on Port ${process.env.PORT}`
  );
});
