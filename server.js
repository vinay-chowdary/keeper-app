// import packages

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//  routes

const notesRouter = require("./routes/notes");

//  middleware

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//  database connection

const dbURL = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster-vinay.dfnbs.mongodb.net/${process.env.DB_NAME}`;
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// routes
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  res.redirect("https://vinay-chowdary.github.io/keeper-app");
});
app.use("/api/notes", notesRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h3>Page not found</h3>");
});

//  listen on a port

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at ${port}`));
