const express = require('express');
const app = express();
const port = 9990;
const router = express.Router()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/User')
app.use('/',indexRouter)
app.use('/users',userRouter)
app.use( (req,res,next) => {res.sendStatus(404).send('page not found')})
app.listen(port, () => {console.log("start server")});
