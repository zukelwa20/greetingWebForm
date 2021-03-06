const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');


const model = require("./models");
const models = model(process.env.MONGO_DB_URL || "mongodb://localhost/greeted");

const nameRoutes = require('./greet');
const nameRoute = nameRoutes(models);

// const resetFun = require('./greet');
// const resetName = resetFun(models);

var app = express();

app.use(express.static('public'));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());


// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(flash());

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
// creating a route
app.get('/', function(req, res) {
    res.render("greeting");
});

 app.get('/greeted/:name', nameRoute.greetedTimes)
 // app.post('timesGreeted', nameRoute.greetedTimes)
app.get('/greeted', nameRoute.allGreeted)
app.get('/greet', nameRoute.showForm)
app.get('/reset', nameRoute.resetFun)
app.post('/greet', nameRoute.greetNames)
// app.get('/greet/greeted/name', nameRoute.counting)

//start the server
var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
