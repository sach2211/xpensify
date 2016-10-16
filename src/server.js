var express = require('express')
var path = require('path')
var app = express()

var db = require('./dataLayer.js')

app.use(express.static(__dirname + '/../public'))

app.get('/', function (req, res) {
  //res.header('Access-Control-Allow-Origin', "*")
  //console.log("Serving file ",  path.join(__dirname, '/../index.html'))
  //res.sendFile(path.join(__dirname, '/../index.html'))
  res.sendFile('/index.html')
  
})


 
app.get('/db/healthcheck', function (req, res) {
  //res.header('Access-Control-Allow-Origin', "*")
  db.healthCheck(function(){
  	res.status(200).send("OK")
  });

})
  
app.listen(3000, function() {
	console.log("Server started at port 3000")
})