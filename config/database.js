const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
