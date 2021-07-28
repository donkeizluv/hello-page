/* eslint-disable no-console */
require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
// configs
const PORT = process.env.PORT || 8000;
// init
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
const server = require("http").createServer(app);
server.listen(PORT);
console.log(`${new Date()} - App started on ${PORT}...`);

// middlewares
app.use(require("./server/middlewares/compress"));
app.use(require("./server/middlewares/cors"));
app.use(require("./server/middlewares/static")(path.join(__dirname, "/public")));
