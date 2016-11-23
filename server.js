var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var categories = require('./public/json/prog_db.json');
var about = require('./public/json/about.json');

var app = express();
var port = process.env.PORT || 3000;

var data = Object.keys(categories);

data.forEach(function(id) {
    var tbFile = './json/' + id + '.json';

    if(fs.existsSync(tbFile)) {
        var tb = require(tbFile);
    }
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index-page', {
        title: 'Final Project - Home',
        categories: categories,
        table: categories['table']
    });
});

app.get('/about', function(req, res) {
    res.render('about-page', {
        title: 'Final Project - About',
        about: about
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
