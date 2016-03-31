var menu_json = require('./../models/menu.json');

var menu = function(req, res) {
    res.json(menu_json)
}

module.exports = menu