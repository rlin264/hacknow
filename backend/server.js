const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

console.log("STARTING SERVER");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
});

//ROUTERS
const shoppingListsRouter = require('./routes/shoppingLists');
const usersRouter = require('./routes/users');

app.use('')

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});