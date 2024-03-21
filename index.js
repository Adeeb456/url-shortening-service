const express = require('express');
const {router} = require('./routes/url');
const {connectToMongoDB} = require('./mongodb/connection');
const {PORT,mongodbURL} = require('./constants/AppConstants');



//connnect to DB
connectToMongoDB(mongodbURL);

const app = express();

// Middleware to parse incoming requests to JSON
app.use(express.json());

app.use('/url',router);

app.listen(PORT,()=>console.log('Server started at port : ', PORT));