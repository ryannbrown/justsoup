const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
var Client = require("ftp");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

const nodemailer = require("nodemailer");
const morgan = require("morgan");
const router = require("express").Router();
const path = require("path");
// aws bucket
const AWS = require("aws-sdk");
require("dotenv").config();
const Busboy = require("busboy");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const cors = require("cors");
app.use(cors());

app.use(morgan("dev"));

app.use(busboy());
app.use(busboyBodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var knex = require("knex")({
//   client: "pg",
//   connection: process.env.CONNSTRING,
//   searchPath: ["knex", "public"],
// });



if (process.env.NODE_ENV === "production") {

  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use(hsts({
    maxAge: 15552000  // 180 days in seconds
  }))

  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
// console.log('Application running!' + cluster.worker.id);
// }
