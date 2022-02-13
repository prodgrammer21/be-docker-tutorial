require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (_, res) => {
  res.send("Hi BE");
});

app.get("/info", (_, res) => {
  res.send({ message: "success", records: [{ name: "Rod", age: 25 }] });
});

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
