const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/info', function (req, res) {
	return res.json({code: 1})
});

Router.get('/list', function (req, res) {
	User.find({}, function (error, doc) {
		return res.json(doc)
	})
});

// User.remove({}, function (error, doc) {
// 	// return res.json(doc)
// })

Router.post('/register', function (req, res) {
	const {
		user,
		password,
		type
	} = req.body
	User.findOne({user: user}, function (error, doc) {
		if (doc) {
			return res.json({code: 1, message: '用户名已存在'})
		} else {
			User.create({user, type, password: md5password(password)}, function (e, d) {
				if (e) {
					return res.json({code: 1, message: '请求失败'})
				} else {
					return res.json({code: 0, message: '注册成功'})
				}
			})
		}
	})
})

function md5password(password) {
	const str = 'react-chat-9527'
	return utils.md5(utils.md5(utils.md5(password + str)))
}

module.exports = Router