var server = require('../server'),
expect = require('expect'),
http = require('http');
var request = require('supertest');

describe('server', function () {
  
  before(function () {
    server.listen(8000);
  });

  describe('Menu', function () {
    it('Should get list of menus', function (done) {
      request(server)
        .get('/menu')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .end(function(err, response){
          expect(response.body.coffees[0]).toEqual({
                "name": "long black",
                "order_path": "/order/long-black",
                "price": 3,
                "caffeine_level": 8,
                "milk_ratio": 0}
              );
          done();
        })
    });
  });

  describe('Order Status', function () {
    it('Should get order status', function (done) {
      request(server)
        .get('/order/123')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .end(function(err, response){
          expect(response.body).toEqual({"status": "READY"});
          done();
        })
    });
  });

  describe('Should post coffee order', function () {
    var coffee_order = {
          "size":"small",
          "extras":["skim-milk","sugar"]
    };

    it('Should get order status', function (done) {
      request(server)
        .post('/order/new_order')
        .send (coffee_order)
        .expect(201)
        .end(function(err, response){
          expect(response.body).toEqual({
                 "order": "order/123",
                 "wait_time": "5"
          });
          done();
        });
    });
  });
});