// requires
const express = require('express');
const path = require('path');
// dotenv require
require('dotenv').config();

// instance creation
const app = express();

// env init
const PORT = process.env.PORT;

// Serve static files from the 'public' directory

app.get('/login', (req , res) => {
    res.sendFile(path.join(__dirname,'login.html'))
})

// test route 
// app.post("/login", (req , res) => {

//     res.end('server is good !')
// })



// server creation
app.listen(PORT , () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})