const express = require('express');
const bodyParser = require('body-parser');
//const keys = require('.//config/keys');
const auth = require('./routes/auth');
const callback = require('./routes/callback');
const form = require('./routes/form');
const ejs = require('ejs');
const getinfo = require('./routes/getinfo');
const update = require('./routes/update');
const getparinfo = require('./routes/getparinfo');
var { mongoose } = require('./db/mongoose');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', auth);
app.use('', callback);
app.use('', form);
app.use('', getinfo);
app.use('', getparinfo);
app.use('', update);

app.listen(port, () => {
    console.log(`Server is up at ${port}`);

});

