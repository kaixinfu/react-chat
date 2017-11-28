const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./user');

const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/user', userRouter);

// app.get('/abc', function (req, res) {
// // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
// // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
// if (req.cookies.isVisit) {
// 	console.log(req.cookies);
// 	res.send("再次欢迎访问");
// } else {
// 	// res.append("connection", "close");
// 	res.append("Cache-Control", "no-cache, no-store");
// 	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
// 	res.cookie('user-----', 1, {maxAge: 60 * 1000, domain: 'localhost'});
// 	res.sendStatus(200);
// 	res.send('欢迎第一次访问');
// }
// });
app.listen(9000, function () {
	console.log('node start =========> 9000')
})