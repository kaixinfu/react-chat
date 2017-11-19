const express = require('express');
const Router = express.Router();

Router.get('/info', function (rep, res) {
	return res.json({code: 1})
});

module.exports = Router