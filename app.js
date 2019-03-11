//Written by Myungsik Kim 03/11/2019
const express = require('express');
const app = express();

app.get('/',(req,res) => res.send("welcome!"))
app.listen(3100, () => console.log("server connected"))

/* old version
app.get('/', function(req, res){
    res.send("welcome!");
});
app.listen(3100, function(){
    console.log("server connected");
});
*/