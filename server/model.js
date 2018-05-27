const mongoose = require('mongoose');
const DB_URL = 'mongodb://192.168.1.6:27017/react-chat';
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
	console.log('mongoose connect =======> succse')
})

const models = {
	user: {
		'user': {'type': String, 'require': true},
		'password': {'type': String, 'require': true},
		'type': {'type': String, 'require': true},
		'avatar': {'type': String},//头像
		'desc': {'type': String},//简介
		'title': {'type': String},//职位名称
		'company': {'type': String},//公司名称
		'money': {'type': String},//薪资
	},
	chat: {
		'chat_id': {'type': String, 'require': true,},
		'from': {'type': String, 'require': true},//谁发出
        'to': {'type': String, 'require': true},//发向谁
		'readed': {'type': Boolean, 'default': false},//是否已读
        'content': {'type': String, 'require': true, 'default': ''},//发送内容
		'create_time': {'type': Number, 'default': new Date().getTime()}//发送时间
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