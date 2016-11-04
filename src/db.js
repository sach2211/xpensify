const monk = require('monk')

// Connection URL
const DB_NAME = 'xpensify_sample'
const URL = 'localhost:27017/' + DB_NAME;
const MDB = monk(URL);

MDB.then(() => {
  console.log('Connected correctly to server')
})

const userInfoCollection = MDB.get('userInfo')


function healthcheck(callback) {
	MDB
	.then(() => {
		console.log("DB Up and Running")
	})
	.catch(err => {
		console.error("Database connection error ", err)
	})
}


function insertRecord(objectToInsert, callback) {
	// let name  = objectToInsert.name || 'NA22'
 // 	let age  = objectToInsert.age || 'NA22'
	let {title, amount, description} = objectToInsert
	userInfoCollection.insert({'title' : title, 'amount': amount, 'description': description})
	.then( () => {
		console.log("Successfully Inserted values in DB")
		MDB.close()
	})
	.catch(err => {
		console.log("Error while inserting data in db ")
	})
}

module.exports = {healthcheck, insertRecord}
