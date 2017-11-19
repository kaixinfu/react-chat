const express = require('express');
const userRouter = require('./user');
const app = express();

app.use('/user', userRouter)
app.listen(9000, function () {
	console.log('node start =========> 9000')
})