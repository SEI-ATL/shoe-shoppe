
const express = require("express")
const app = express()

//home screen test for now.
app.get("/", (req, res) => {
  res.send("My first express web page!!!!")
})

//ROUTE TEST for the login and signup page. this might actually be the first page. 
app.get("/login", (req, res) => {
  res.send("ROUTE TEST LOGIN AND SIGNUP")
})

//store all the player data here.
app.get("/profile", (req, res) => {
  res.send("store the saved teams here")
})


app.listen(3000)