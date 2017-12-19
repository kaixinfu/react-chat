const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', function (socket) {
	console.log('chat.connect >>>>>>>>>>> socket')
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