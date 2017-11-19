const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/chat';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
	console.log('mongoose connect =======> succse')
})