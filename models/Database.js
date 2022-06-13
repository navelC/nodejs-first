const MongoClient = require('mongodb').MongoClient
client = new MongoClient(`mongodb+srv://navelc:123@cluster0.c7zc7.mongodb.net/?retryWrites=true&w=majority`)
client.connect()
const db = client.db('test')
console.log("connect")
module.exports  = db
  	
