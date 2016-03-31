#! /bin/bash

echo "npm install"

npm install

echo "run mocha unit test"

mocha

cd coffee-api-challenge && bundle install

bundle exec rake "pacto:validate[http://192.168.99.100:4567,contracts]"



