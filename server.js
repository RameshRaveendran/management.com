// requires
const express = require('express');
// dotenv require
require('dotenv').config();

// instance creation
const app = express();

// env init
const PORT = process.env.PORT;

// test route 
app.get("/", (req , res) => {

    res.end('server is good !')
})



// server creation
app.listen(PORT , () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})