
// import packages

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()



//  routes

const notesRouter = require('./routes/notes')



//  middleware

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("client/build"));


//  database connection

const dbURL = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster-vinay.dfnbs.mongodb.net/${process.env.DB_NAME}`;
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });


// routes

app.use('/api/notes', notesRouter)


//  listen on a port

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at ${port}`));