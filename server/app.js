'use strict'

var express = require('express');

const app = express();

app.get('/', function(req, res){

    res.status(200).send('Git env var test');

});


app.listen(8080);