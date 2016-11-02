var MongoClient = require('mongodb').MongoClient
  
var DB_NAME = 'xpensify_sample'
var URL = 'mongodb://localhost:27017/' + DB_NAME;

function connect() {
	
	return new Promise (function(resolve, reject) {
		MongoClient.connect(URL, function(err, db) {		
				if (err) {
					reject(err)
					console.error('Error fetching db object in connect method', err);
				}
				resolve(db)
			})
	});
}


function healthcheck(callback) {
	connect()
	.then(function(db){
		db.close(function(){
			callback()
		})
	})
	.catch(err => console.error("Database connection error ", err))
	
}

function insertRecord(objectToInsert, callback) {
	connect()
	.then(function(db){
		// data validation
		let name  = objectToInsert.name || 'NA22'
		let age  = objectToInsert.age || 'NA22'
		console.log("Inserting into DB ", name, age)
		// perform the db operation

		let userInfoCollection = db.collection('userInfo')
		userInfoCollection.insert({'name': name, 'age': age}, function(){
			console.log("Record inserted in DB");
			callback();
			db.close();
		})
	})
	.catch(err => console.error("Database connection error ", err))
}

module.exports = {healthcheck, insertRecord}