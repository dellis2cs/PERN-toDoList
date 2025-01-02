//create the express server
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");
app.set("view engine", "ejs");
const todoRouter = require("./routes/todoRoutes");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", todoRouter);
//ROUTES

//listen on port 5000
app.listen(8080, () => {
  console.log("server has started on port 8080");
});
