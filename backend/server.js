const express = require("express"); 
require("dotenv").config(); 
const path = require('path'); 

// express app
const app = express(); 
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.listen(process.env.PORT, (req, res) => {
    console.log("Listening"); 
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });