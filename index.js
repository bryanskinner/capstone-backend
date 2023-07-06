const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const
const {movies, users}  = require("./mockdata");
const PORT = process.env.PORT || 4000; 



app.get('/movies', (req, res) => {
  res.json('movies');
});

app.get("/movies/:id"), (req, res) =>  {
    const { id } = req.params;
    const foundMovie = movies.find((movie) => movie.id === +id);
}




app.get('/users', (req, res) => {
    res.json('users');
  });
  


  app.post("/signin", (req, res) => {
    const { email,  password} = req.body;
    const foundUser = usersfind((user) => user.email === email);

    const token = (foundUser, "user1");
     token,
  });

  app.post("/signup", (req, res) => {

  })




app.listen(PORT, console.log("Listening on ${PORT}"));
