var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var db = require('./json/prog_db.json');

var app = express();
var port = process.env.PORT || 3000;

var data = Object.keys(db);

data.forEach(function(id) {
    var tbFile = './json/' + id + '.json';
    console.log(db[id]);
    if(fs.existsSync(tbFile)) {
        var tb = require(tbFile);
    }
});
