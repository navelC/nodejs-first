const userModel = require("../models/User")
const list = 
module.exports.list = (req,res,next) => {
	const data = userModel.list().toArray((err,result) => {
		if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
	})
	res.send("data")
	
}
module.exports.insert = (req,res,next) => {
	try{
		const data = req.body
		userModel.inserts(data)
		res.send("success")
	}catch(err){
		console.log(err)
		res.send("failed")
	}
}
