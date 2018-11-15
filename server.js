var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getYear', () => new Date().getFullYear());

app.use((req, res, next) => {
  res.render('maintenance.hbs', { title: 'Maintenance' });
});

app.get('/', function (req, res) {
  res.render('welcome.hbs', {
    title: 'Welcome',
    welcome: 'Welcome to my website'
  })
});

app.get('/about', function (req, res) {
  res.render('about.hbs', {
    title: 'About'
  })
})

app.get('/bad', (req, res) => {
  res.send({ "error": "Unable to do this request." });
});

app.listen(3000);