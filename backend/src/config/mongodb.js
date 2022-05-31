const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const connectionDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log(`Successfully connected to ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = { connectionDB };
