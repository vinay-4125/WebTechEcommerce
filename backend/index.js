const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

const databaseURI = process.env.DATABASE_URI;

mongoose.connect(databaseURI).then(() => console.log("Mongodb Connected"));

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
