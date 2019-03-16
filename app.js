//Written by Myungsik Kim 03/16/2019 
const express = require('express');
const app = express();

app.get('/',(req,res) => res.send("welcome!"))
app.listen(3100, () => console.log("server connected"))