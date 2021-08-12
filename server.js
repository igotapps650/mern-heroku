const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({path: "./config.env"});
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.json({
        "status": true
    })
})

 // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

 //set static assets if in production
if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));  
    })
  
}

app.listen(PORT,(err)=>{
    if(err) return console.log(err);
    console.log("server is runing on port " + PORT)
})
