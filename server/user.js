const express = require('express');
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

Router.post('/register', function (req, res) {
	const {
		user,
		password,
		type
	} = req.body
	User.findOne({user: user}, function (error, doc) {
		if (doc) {
			return res.json({code: 1, maassage: '用户名重复'})
		} else {
			User.create({user, password, type}, function (e, d) {
				if (e) {
					return res.json({code: 1, massage: '请求失败'})
				} else {
					return res.json({code: 0})
				}
			})
		}
	})
})

module.exports = Router