import express from 'express';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import model from './model';
import React, {Component} from 'react';

function Test() {
    return <h2>222</h2>
}
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const Chat = model.getModel('chat');
io.on('connection', function (socket) {
    socket.on('sendmsg', function (data) {
        const {from, to, content} = data
        const chat_id = [from, to].sort().join('_')
        Chat.create({chat_id, from, to, content}, function (error, doc) {
            io.emit('receivemsg', Object.assign({}, doc._doc))
        })
        //
    })
})
const userRouter = require('./user');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/user', userRouter);
app.use(function (req, res, next) {
    if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
        return next()
    }
    console.log('path======>',path.resolve('build/index.html'))
    return res.sendFile(path.resolve('build/index.html'))
})
app.use('/', express.static(path.resolve('build')));
server.listen(9000, function () {
    console.log('node start =========> 9000')
})