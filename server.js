var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var progDB = require('./public/json/prog_db.json');
var about = require('./public/json/about.json');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    var data = Object.keys(progDB);
    var tableArray = [];

    data.forEach(function(key) {
        var tbFile = progDB[key]['url'] + key + '.json';

        if(fs.existsSync(tbFile)) {
            var tb = require(tbFile);
            tableArray.push(Object.assign({"name":progDB[key]['name']}, tb));
        }
    });

    res.render('index-page', {
        title: 'Final Project - Home',
        categories: tableArray,
        // userName: 'ALIEN',
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

app.listen(port, function() {
    console.log('=== Listening on Port: ', port, '===');
});
