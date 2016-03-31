var coffee_order_json = require('./../models/coffee-order.json');

var coffee_order = function(req, res) {
    res.status(201).json(coffee_order_json);
};

module.exports = coffee_order;