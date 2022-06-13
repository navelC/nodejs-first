const userController = require("../Controller/User")
const express = require("express")
const router = express.Router()
router.get('/', userController.list)
router.post('/', userController.insert)
module.exports = router;
