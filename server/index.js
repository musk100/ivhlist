const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const GetListController = require("./Controller/GetListController");

app.use(express.json());
const port = process.env.API_PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//routes
GetListController(app);
