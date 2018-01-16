'use strict'

var express = require('express');

const app = express();

app.get('/', function(req, res){

    res.status(200).send('Phase: GCP Test - Version: _VER_');

});


app.listen(8080);


//Namespace update