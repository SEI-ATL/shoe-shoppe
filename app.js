
const express = require("express")
const axios = require("axios")
const ejsLayouts = require("express-ejs-layouts");
const app = express()
const path = require("path")

//middleware
app.use(express.urlencoded({ extended: false })) 
app.use(express.json()) // this function parses incoming data.
app.use(express.static("views"))

app.set("view engine", "ejs") //use a templating engine (ejs)
app.use(ejsLayouts)

//home screen test route for now.
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//ROUTE TEST for the login and signup page. this might actually be the first page. 
app.get("/auth/login", (req, res) => {
  res.render("login.ejs");
});

//store all the player data here.
app.get("/profile", (req, res) => {
  res.render("profile.ejs");
});

app.listen(3000, () => {
  console.log("The server is now running on port 3000")
})