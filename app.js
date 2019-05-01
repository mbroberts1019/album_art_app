//jshint esversion: 6

const express = require("express");
const app = express();
const port = 3000;
const request = require('request');
const queryString = require('querystring');

const client_id = '7a697e17569443d580ad554e3c0db306';
const redirect_uri = queryString.encode({
  redirect_uri: 'http://localhost:3000/apireturn'
});



app.get("/", (req, res) => {
  console.log(client_id);
  res.redirect(`https://accounts.spotify.com/authorize?client_id=${client_id}&${redirect_uri}&callback&scope=user-read-private%20user-read-email&response_type=token&state=123`)
});

app.use(express.static("public"));

app.get("/apireturn", (req, res) => {
  console.log("APIRETURN ACCESSED");
  res.sendFile(__dirname + "/public/index.html");
})

app.listen("3000", (req, res) => {
  console.log("server active on port 3000");
});