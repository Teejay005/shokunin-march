var order_status_json = require('./../models/order-status.json');

var order_status = function(req, res) {
    res.json(order_status_json);
};

module.exports = order_status;