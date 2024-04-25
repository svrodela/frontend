const express = require("express");
const request = require("request");
const exprhbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exprhbs());

app.set("view engine","handlebars");

//ruta get inicial

app.get("/",(req,res)=>{
request("https://minox.onrender.com/grafica",(err,response,body)=>{
    if(!err){
        const MQ135 = JSON.parse(body);
        res.render("home",{
            layout:"main",
            MQ135:MQ135
        });
    }
})
})

app.listen(3000);

