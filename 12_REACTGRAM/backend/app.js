require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// CONFIG JSON E FORM DATA REPONSE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// DIRETORIO DE UPLOAD
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB CONNECTION
require("./config/db.js");

// ROUTES
const router = require("./routes/Router");
app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
