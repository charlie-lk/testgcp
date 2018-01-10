'use strict'

var express = require('express');

const app = express();

app.get('/', function(req, res){

    res.status(200).send('Hello GCP');

});


app.listen(8080);