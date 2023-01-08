const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const exp = require("constants");
const { dirname } = require("path");

// using app
const app = express();

//hello
//used to console every request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//body parser
app.use(express.json());

//static files middleware. if any store it in public
app.use(express.static(`${dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

module.exports = app;
