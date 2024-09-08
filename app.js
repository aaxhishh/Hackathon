const express = require("express");
const app = express();
require("dotenv").config();
require("./Connection/conn");
const cors = require("cors");
const UserAPI = require("./Routes/user");
const TaskAPI = require("./Routes/task");
app.use(cors());
app.use(express.json());
app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);


//Localhost:1000/api/v1/sign-in

app.use("/", (req, res) => {
  res.send("hello from the backend");
});
const PORT = 1000;
app.listen(PORT, () => {
  console.log("Server is running on port 2000");
});
