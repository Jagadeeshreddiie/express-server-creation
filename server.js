
const express=require("express");
const app=express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send();
});

app.listen(3000,function(){
    console.log("Server is started with the port 3000");
});


