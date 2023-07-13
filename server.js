const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const loginRoute = require("./routes/loginRoute");
const registerRouter = require("./routes/registerRoute");
const connection = require("./config/databaseSetup");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const MongoConnect = require("connect-mongo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//Login Route Middleware
app.use("/login", loginRoute);
// Register Route Middleware
app.use("/register", registerRouter);

// Create a session and store inside the database
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoConnect.create({
      mongoUrl: process.env.MONGO_URL,
      dbName: "ifrc",
    }),
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000, //expires in 14 days time
    },
  })
);

// Default homepage
app.get("/", (req, res) => {
  res.json({ page: "Home" });
});

connection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
