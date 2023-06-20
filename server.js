const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const loginRoute = require("./routes/loginRoute");
const registerRouter = require("./routes/registerRoute");
const connection = require("./config/database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Login Route Middleware
app.use("/login", loginRoute);
// Register Route Middleware
app.use("/register", registerRouter);

// Default homepage
app.get("/", (req, res) => {
  res.json({ page: "Homepage" });
});

connection().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}...`);
  });
});
