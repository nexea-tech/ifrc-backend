const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const loginRoute = require("./routes/loginRoute");
const registerRouter = require("./routes/registerRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Login Route
app.use("/login", loginRoute);
// Register Route
app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});

app.get("/", (req, res) => {
  res.json({ page: "Homepage" });
});
