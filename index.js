require('dotenv').config();

const express = require('express');
const app  = express();
const cors = require('cors');
app.use(cors());
const routes = require('./src/routes');

const db = require("./src/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(express.json());

app.use('/api',routes);

//starting server
app.listen(4000,()=>console.log('app started on port 4000'));