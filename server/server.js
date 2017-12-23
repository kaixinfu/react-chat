const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const model = require('./model');
const Chat = model.getModel('chat');
io.on('connection', function (socket) {
    socket.on('sendmsg', function (data) {
		const { from , to, content } = data
		const chat_id = [from, to].sort().join('_')
		Chat.create({ chat_id, from , to, content}, function (error ,doc) {
            io.emit('receivemsg', Object.assign({}, doc._doc ))
        })
		//
    })
})
const userRouter = require('./user');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/user', userRouter);
server.listen(9000, function () {
	console.log('node start =========> 9000')
})