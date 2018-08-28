const express = require ('express');
let bodyParser = require('body-parser');
const MongoClient = require ('mongodb').MongoClient;
let db;
let query = [];

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

let url = 'mongodb://localhost:27017/Personal-DB';
MongoClient.connect(url, function(err, database) {
  db = database;
  console.log("Connected correctly to server.");
});


// Headers that allow me to post, get, and patch data from the client
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, HEAD, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

/* Get portfolio Data Function */
app.get("/getCarData", function(req, res) {
  db.collection("carFilteringOptions").find().toArray(function(err, result) {
    if (err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// route for using all the search parameters to filter documents
app.post("/searchAll", function (req, res) {
  createQuery(req.body);
  db.collection("carFilteringOptions").find({
    $and: query
  }).toArray(function(err, result) {
    res.send(result);
  });
});

// uses OR operator to search documents that may have one or more of the properties
app.post("/searchSome", function (req, res) {
  createQuery(req.body);
  db.collection("carFilteringOptions").find({
    $or: query
  }).toArray(function(err, result) {
    res.send(result);
  });
});

function createQuery(body) {
  let objectKeys = Object.keys(body);
  query = [];
  for (let i = 0; i < objectKeys.length; i++) {
    let obj = {};
    // if the key is a year, the mongodb needs to look for a number
    // I am creating strings by default, so when I see that year is in the model
    // I convert the value to a Number type
    if (objectKeys[i] === 'year') {
      obj[objectKeys[i]] = Number(body[objectKeys[i]])
    } else {
      obj[objectKeys[i]] = body[objectKeys[i]];
    }
    query.push(obj)
  }
}

app.listen('3000', function(){
  console.log('running on 3000...');
});
