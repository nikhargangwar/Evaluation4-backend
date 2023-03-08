const express = require('express');
const app  = express();
const cors = require('cors');
app.use(cors());
// const todoRouter = require('./src/routes.js');
const validateLogin = require('./src/middlewares/middlewares.js');
//middleware to convert coming request in the form of json data
app.use(express.json());

// app.use(validateLogin);
//routes
// app.get('/api',validateLogin);
app.post('/api',validateLogin);

//starting server
app.listen(4000,()=>console.log('app started on port 4000'));