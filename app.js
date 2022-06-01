const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const tasks = require("./routers/task");
const errorHandlingMiddleware = require("./middleware/error-handling");

//middleware
app.use(express.static("./public"));	//deploys the html website
app.use(errorHandlingMiddleware);
app.use(express.json());

//route
app.use("/api/v1/tasks", tasks);

app.get("*", (req, res) => {
  res.status(404).send("Route does not exits");
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

// app.get('/api/v1/tasks')    --get all the task
// app.post('/api/v1/tasks')    --create new task
// app.get('/api/v1/tasks/:id')    --get single task
// app.patch('/api/v1/tasks/:id')    --update task
// app.delete('/api/v1/tasks/:id')    --delete task
