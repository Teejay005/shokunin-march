var express    = require('express');        // call express
var app        = express();     
var path       = require('path');         // define our app using express
var bodyParser = require('body-parser');
var menuController = require('./app/controllers/menu_controller.js');
var orderController = require('./app/controllers/order_controller.js');
var coffeeController = require('./app/controllers/coffee_controller.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4567;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/menu', menuController);

router.get('/order/:id', orderController);

router.post('/order/:order_name', coffeeController);

app.use('/', router);

app.listen(port);
console.log('app runs on' + port);

module.exports = app;