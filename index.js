const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const error = require('./middlewares/error');
const connectMongoDB = require('./database/config/connect');

app.use(logger('dev'));
app.use(express.json());
app.use(error);
app.use(express.static("./public"));
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("json spaces", 1);

connectMongoDB();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.append('X-Frame-Options', 'SAMEORIGIN');
    next();
});

require('./routes/get/router')(app); // get routes
require('./routes/post/router')(app); // post routes

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`[^]: Web Server Launched: http://localhost:${PORT}`.cyan);
});