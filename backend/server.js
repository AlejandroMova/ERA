const express = require("express"); 
require("dotenv").config(); 
const path = require('path'); 

const port = process.env.PORT || 3000; 
// express app
const app = express(); 
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });

app.listen(port, () => console.log('Listening')); 