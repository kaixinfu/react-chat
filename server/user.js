const express = require('express');
const utils = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const filter = {password: 0, __v: 0}

Router.get('/info', function (req, res) {
	const {user_id} = req.cookies
	if (!user_id) {
		return res.json({code: 1})
	} else {
		User.findOne({_id: user_id}, filter, function (error, doc) {
			if (error) {
				return res.json({code: 1, message: '网路异常'})
			}
			if (doc) {
				return res.json({code: 0, data: doc})
			}
		})
	}
});

Router.get('/list', function (req, res) {
	User.find({}, function (error, doc) {
		return res.json(doc)
	})
});
//删除信息
// User.remove({}, function (error, doc) {
// 	// return res.json(doc)
// })
//注册信息
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
			const userModel = new User({user, type, password: md5password(password)});
			userModel.save(function (error, doc) {
				if (error) {
					return res.json({code: 1, message: '请求失败'})
				} else {
					const {_id, user, type} = doc
					res.cookie('user_id', doc._id)
					return res.json({code: 0, message: '注册成功', data: {_id, user, type}})
				}
			})
			// User.create({user, type, password: md5password(password)}, function (e, d) {
			// 	if (e) {
			// 		return res.json({code: 1, message: '请求失败'})
			// 	} else {
			// 		return res.json({code: 0, message: '注册成功'})
			// 	}
			// })
		}
	})
})
//登录信息
Router.post('/login', function (req, res) {
	const {
		user,
		password,
	} = req.body
	User.findOne({user, password: md5password(password)}, filter, function (error, doc) {
		if (!doc) {
			return res.json({code: 1, message: '用户名或者密码错误'})
		} else {
			res.append("Cache-Control", "no-cache, no-store");
			res.append("connection", "close");
			res.append("credentials", "include");
			res.cookie('user_id', doc._id)
			return res.json({code: 0, message: '登陆成功', data: doc})
		}
	})
})

function md5password(password) {
	const str = 'react-chat-9527'
	return utils.md5(utils.md5(utils.md5(password + str)))
}

module.exports = Router