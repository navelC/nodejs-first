const db = require('./Database');
const user = db.collection('user')
exports.list = () => {
	return  user.find({})
}
exports.get = async (id) => {
	return await user.find({objectId:id})
}
exports.insert = async (data) => {
	return await user.insertOne(data)
}
exports.inserts = async (data) => {
	return await user.insertMany(data)
}