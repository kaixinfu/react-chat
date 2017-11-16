const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/chat';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
	console.log('mongoose connect =======> succse')
})

const User = mongoose.model('user', new mongoose.Schema({
	user: {type: String, require: true},
	age: {type: Number, require: true}
}))
//新增
// User.create({
// 	user: 'fuyichen',
// 	age: 15
// }, function (error, doc) {
// 	if (!error) {
// 		console.log(doc)
// 	} else {
// 		console.log(error)
// 	}
// })
//删除
// User.remove({age: '19'}, function (error, doc) {
// 	console.log('doc ===>', doc)
// })
//更新
User.update({user: 'fuyichen'}, {'$set': {age: '10'}}, function (error, doc) {
	console.log(doc)
})

const app = express();

app.get('/', function (req, res) {
	res.send('<h1>hello express</h1>')
})
app.get('/data', function (req, res) {
	User.find({user: 'fuliping'}, function (error, doc) {
		return res.json(doc)
	})
})
// app.get('/delete', function (error, doc) {
//
// })
app.listen(9000, function () {
	console.log('node start =========> 9000')
})