const express = require("express");
const app = express();
const cors = require("cors");
// const hostname = "127.0.0.1";
const port = 3000;

/* POSTMAN */
const GetListAPI = require("./Controller/GetListController");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//routes
GetListAPI(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.export = app;
