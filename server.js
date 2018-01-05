'use strict';

const express = require('express');
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const dir = require('./server/dir.js');
const app = express();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));

// renvoie un fichier s'il existe
app.use(express.static('.'));

// renvoie un repertoire s'il existe
// app.use(dir('.'));
app.use(serveIndex('.', {icons: true}));

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});