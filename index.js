const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const nameRoutes = require('./greet');
const nameRoute = nameRoutes();

// const nameRoutes = require('./greetings');
var app = express();

app.use(express.static('public'));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
 app.use(bodyParser.json());

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');


// create a route
app.get('/', function(req, res) {
    res.redirect("/greet");
});

app.post('/greet', nameRoute.greetNames)
app.get('/greet', nameRoute.greetNames)

// app.get('/greetings', nameRoutes.index);
// app.get('/greetings/greet', nameRoutes.submit);
// app.post('/greetings/greet', nameRoutes.submit);

//start the server
var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
























// app.post('/submit', function(req, res){
//   var formData = req.body;
//   console.log(formData.product_name);
//   res.render('product', {greeting :  formData.product_name});
// });









// const express = require('express');
// const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
// const flash = require('express-flash');
// const session = require('express-session');
//
// const SubjectRoutes = require('./subjects');
// const Models = require('./models');
//
// const models = Models('mongodb://localhost/tutors');
//
// const subjectRoutes = SubjectRoutes(models);
//
// const app = express();
//
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
//
// app.get('/', function(req, res){
//     res.send('LetsTutor');
// });
//
// app.use(express.static('public'));
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
//
// // parse application/json
// app.use(bodyParser.json());
//
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
// app.use(flash());
//
// // app.get('/subjects', subjectRoutes.index);
// app.get('/subjects/add', subjectRoutes.addScreen);
// app.post('/subjects/add', subjectRoutes.add);
//
// const port = 3007;
//
// app.listen(port, function(){
//     console.log('Web app started on port : ' + port);
// });
