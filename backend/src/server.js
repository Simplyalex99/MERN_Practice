const express = require("express");
const app = express();
const { PORT } = require("./config/config.js");
const { connectionDB } = require("./config/mongodb");
const SERVER_PORT = PORT || 3000;
connectionDB();
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
