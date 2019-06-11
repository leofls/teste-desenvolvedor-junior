var express = require('express');
var path = require('path');
var faker = require('faker');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.characters = require('./data/characters.json')
app.locals.points = "10";

// ROTAS
app.get('/', (req, res) => {
    
  
  res.render('pages/teste',)
})


app.use(express.static(__dirname + '/public'))
app.listen(port)
console.log('Servidor iniciado em http://localhost:' + port)