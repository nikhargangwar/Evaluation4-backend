const express = require('express');
const app  = express();
const cors = require('cors');
app.use(cors());
const routes = require('./src/routes.js');

app.use(express.json());

app.use('/api',routes);

//starting server
app.listen(4000,()=>console.log('app started on port 4000'));