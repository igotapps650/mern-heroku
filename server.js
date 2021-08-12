const express = require("express");
const app = express();
require("dotenv").config({path: "./config.env"});
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.json({
        "status": true
    })
})

 // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
app.listen(PORT,(err)=>{
    if(err) return console.log(err);
    console.log("server is runing on port " + PORT)
})
