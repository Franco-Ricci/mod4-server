require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./rutas/usuario'))
//Creamos conexion con mongoDB
mongoose.connect("mongodb://localhost:27017/rolling",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos online");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Servidor online en puerto:", process.env.PORT);
});
