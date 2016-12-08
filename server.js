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
// mongodb://luans:123456@ds059644.mlab.com:59644/cs290db
// mongo ds059644.mlab.com:59644/cs290db -u luans -p 123456
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
    progDB.collection('cs290db').find({}).toArray(function(err, table) {
        if (err) {
            console.log("Error: Can fetch data from database.");
            res.status(500).send(err);
        } else {
            var tables = [];
            var game = {name:"Game World", table:[]};
            var animal = {name:"Animal World", table:[]};
            var microbe = {name:"Microbe World", table:[]};
            var plant = {name:"Plant World", table:[]};
            var unknown = {name:"Unknown World", table:[]};

            table.forEach(function(item) {
                switch (item['type']) {
                    case 'game':
                        game['table'].push(item);
                        break;
                    case 'animal':
                        animal['table'].push(item);
                        break;
                    case 'microbe':
                        microbe['table'].push(item);
                        break;
                    case 'plant':
                        plant['table'].push(item);
                        break;
                    default:
                        unknown['table'].push(item);
                        break;
                }
            });

            if (game['table'].length > 0) {
                tables.push(game);
            }

            if (animal['table'].length > 0) {
                tables.push(animal);
            }

            if (microbe['table'].length > 0) {
                tables.push(microbe);
            }

            if (plant['table'].length > 0) {
                tables.push(plant);
            }

            if (unknown['table'].length > 0) {
                tables.push(unknown);
            }

            res.render('index-page', {
                title: 'Final Project - Home',
                categories: tables
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

app.post('/:person/to-login', function(req, res, next) {
    var username = req.body['username'];
    var password = req.body['password'];
    var checkUsername = users['username'];
    var checkPassword = users['password'];
    var flag = false;

    for (var i = 0; i < 3; i++) {
        if (username == checkUsername[i] && password == checkPassword[i]) {
            flag = true;
            break;
        }
    }

    if (flag) {
        res.redirect('/' + username);
    }
});

app.get('/:person', function(req, res, next) {
    if (req.params.person) {
        res.render('person-page', {
            title: 'Final Project - Person',
            userName: req.params.person
        });
    } else {
        next();
    }
});

app.post('/:person/add-image', function(req, res, next) {
    if (req.body) {
        progDB.collection('cs290db').insertOne({name:req.body.name, type:req.body.type, owner:req.body.owner, width:req.body.width, height:req.body.height, url:req.body.url, description:req.body.description}, function(err, result) {
            if (err) {
                res.status(500).send("Error: Fail to insert a new image: \n\n" + err);
            }
        });
    }
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
