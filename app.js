var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Working Server");
})

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("timestamp server is running");
});