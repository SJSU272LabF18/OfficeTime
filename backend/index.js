const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require("./config/db.js");

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const port = 3001;

app.use(bodyParser.json())

app.post('/login', function(req,res){

    console.log(req.body)
    var users = new mongoose.Users({
    name : req.body.name,
    token : req.body.token,
    email : req.body.email,
    provider : req.body.provider,
    provider_Id : req.body.provider_Id
    });
    console.log("in post request", users)
    users.save().then(
       user => {
         console.log("user created :", user);
         res.code = 200;
       },err => {
          console.log("User Already exists.");
         res.code = 400;
        }
      );
})

app.listen(port);
console.log("Server running on "+ port);