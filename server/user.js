const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/info', function (rep, res) {
	return res.json({code: 1})
});

Router.get('/list', function (rep, res) {
	User.find({}, function (error, doc) {
		return res.json(doc)
	})
});

module.exports = Router