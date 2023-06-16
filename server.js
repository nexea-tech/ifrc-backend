const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(process.env.PORT || 6001, () => {
  console.log(`Listening to portt ${process.env.PORT}...`);
});

