const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
};
module.exports = config;
