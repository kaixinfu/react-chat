const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/react-chat';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
	console.log('mongoose connect =======> succse')
})

const models = {
	user: {
		'user': {type: String, require: true},
		'password': {type: String, require: true},
		'type': {type: String, require: true},
		'avatar': {type: String},
		'desc': {type: String},
		'title': {type: String},
		'company': {type: String},
		'money': {type: String},
	},
	chat: {
	
	}
}

for (let i in models) {
	mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}