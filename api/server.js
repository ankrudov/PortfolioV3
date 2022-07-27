//dotenv variables
require('dotenv').config()
const dbUrl = process.env.DATABASE_URL;
//used to configure server
const express = require('express');
//middleware
const cors = require('cors');


const app= express();
//importing routes 
const routes = require('./routes/routes');
const about = require('./routes/about');
const contact = require('./routes/contact')
const project = require('./routes/project');

const PORT = 5000;
//allows for usage of mongoose to connect to mongoDB
const mongoose = require('mongoose');
const database = mongoose.connection


app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL
    }));
//route handling
// app.use('/api',routes);
app.use('/api',about);
app.use('/api',contact);
app.use('/api',project)

//this is the connection to mongoDB containing project info
mongoose.connect(dbUrl).
    catch((err)=> console.log(err));
database.on('error',(error) => console.error(error));
database.once('open',() => console.log('connected to database'));



app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));

