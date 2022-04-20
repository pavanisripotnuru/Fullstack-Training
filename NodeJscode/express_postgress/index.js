const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./users')
const dbs = require('./movies')
const port = 3000
const request = require('request');
var multer = require('multer');
var upload = multer();
var jwt = require('jsonwebtoken');
const jwt_decode=require('jwt-decode');
require('dotenv').config();
const { checkToken } =require('./tokenValidation');


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

/*app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));*/

app.use(cors(corsOptions)) 

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});*/

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
const secret_key = 'Saltkey@2022';
const token = jwt.sign({id:'123456'}, secret_key);
console.log(token)
//app.get('/users', db.getUsers)
//app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db. deleteUser)
app.get('/users/age/:id', db.getUserByAge)
app.get('/users/movienames/:id', checkToken, db.getMovieNamesByUserId)
app.get('/users/usernames/:id', db.getUserNamesByMovieId)

app.get('/movies', dbs.getMovies)
app.get('/movies/:id', dbs.getUMoveById)
app.post('/movies', dbs.createMovie)
app.put('/movies/:id', dbs.updateMovie)
app.delete('/movies/:id', dbs.deleteMovie)

app.post('/register/user', db.registerUser)
app.post('/login/user', db.loginUser)

/*app.post('/register/users/', (req, res) => {
  request(
    { url: 'https://localhost:3000/register/users/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )



});*/

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})