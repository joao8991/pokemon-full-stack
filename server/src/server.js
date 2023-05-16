const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());

// we need this to read the body of the requests
app.use(express.json());

app.use(routes);

module.exports = app;
