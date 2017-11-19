const express = require('express');
const Router = express.Router();

Router.get('/info', function (rep, res) {
	console.log('rep ========================================> ', rep)
	console.log('res =========================================> ', res)
	return res.json({code: 1})
});

module.exports = Router