#! /bin/bash

echo 'Install the dependencies'

npm install

echo 'Run the unit test'
mocha

cd coffee-api-challenge

bundle install

bundle exec rake "pacto:validate[https://shokuni-api.herokuapp.com,contracts]"