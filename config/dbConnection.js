const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(
      "connected to the database",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
