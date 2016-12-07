var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoDB = require('mongodb');
var about = require('./public/json/about.json');
var users = require('./public/json/users.json');

var app = express();
var port = process.env.PORT || 3000;
// var mongoHost = 'classmongo.engr.oregonstate.edu';
// var mongoPort = 27017;
// var mongoUsername = 'luans';
// var mongoPassword = '7AffEZ2tVPaTmL4';
// var mongoDBName = 'cs290_luans';
// var mongoURL = 'mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
// mongodb://luans:Who&LSj2017@ds059644.mlab.com:59644/cs290db
var mongoHost = 'ds059644.mlab.com';
var mongoPort = 59644;
var mongoUsername = 'luans';
var mongoPassword = '123456';
var mongoDBName = 'cs290db';
var mongoURL = 'mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
var progDB;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    progDB.collection('cs290db').find({}).toArray(function(err, tables) {
        if (err) {
            console.log("Error: Can fetch data from database.");
            res.status(500).send(err);
        } else {
            res.render('index-page', {
                title: 'Final Project - Home',
                categories: tables,
                // userName: 'ALIEN',
            });
        }
    });
});

app.get('/login', function(req, res) {
    res.render('login-page', {
        title: 'Final Project - Login'
    });
});

app.get('/about', function(req, res) {
    res.render('about-page', {
        title: 'Final Project - About',
        about: about
    });
});

app.get('/people/:person', function(req, res) {
    res.render('person-page', {
        title: 'Final Project - Person'
    });
});

app.get('*', function(req, res) {
    res.status(404).render('404-page', {
        title: '404 Error'
    });
});

mongoDB.MongoClient.connect(mongoURL, function(err, db) {
    if(err) {
        console.log('Error: Unable to connect to Mongo Database.');
        throw err;
    }

    progDB = db;

    app.listen(port, function() {
        console.log('=== Listening on Port: ', port, '===');
    });
});
