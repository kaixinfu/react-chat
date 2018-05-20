import express from 'express';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import model from './model';
import React from 'react';
import {renderToString} from 'react-dom/server'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, StaticRouter} from 'react-router-dom';
import csshook from 'css-modules-require-hook/preset';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../src/reducers'
import assethook from 'asset-require-hook';

assethook({
    extensions: ['png']
});
// assethook({
//     extensions: ['jpg']
// });
// require('asset-require-hook')({
//     extensions: ['jpg']
// })

import APP from '../src/App';
import staticPath from '../build/asset-manifest'

// import {store} from '../src/store/createStore';

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
    const context = {}
    const store = createStore(reducers, compose(applyMiddleware(thunk)))
    const serverRender = renderToString(
        (<Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <APP/>
            </StaticRouter>
        </Provider>))
    const basicHtml = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <title>React App</title>
            <link rel="stylesheet" href="/${staticPath['main.css']}">
          </head>
          <body>
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${serverRender}</div>
            <script src="/${staticPath['main.js']}"></script>
          </body>
        </html>`
    return res.send(basicHtml)
    return res.sendFile(path.resolve('build/index.html'))
})
app.use('/', express.static(path.resolve('build')));
server.listen(9000, function () {
    console.log('node start =========> 9000')
})