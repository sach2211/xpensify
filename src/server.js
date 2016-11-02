var express = require('express')
var path = require('path')
var app = express()
var mongodb = require('./db')
var bodyParser = require('body-parser');
//var db = require('./dataLayer.js')

app.use(express.static(__dirname + '/../public'))
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.sendFile('/index.html')
})


 
app.get('/db/healthcheck', function (req, res) {
  //res.header('Access-Control-Allow-Origin', "*")
  
  mongodb.healthcheck(function(){
  	res.status(200).send("DB up and running")
  })

})

app.post('/db/healthcheck/insert', function (req, res) {
  //res.header('Access-Control-Allow-Origin', "*")
  console.log(".. ", req.body)
  let objectToInsert = req.body || {}
  mongodb.insertRecord(objectToInsert, function(){
  	res.status(200).send("DB Insert up and running")
  })

})
  
app.listen(3000, function() {
	console.log("Server started at port 3000")
})