#! /bin/bash

echo 'Install the dependencies'

npm install

echo 'Run the unit test'
mocha

cd coffee-api-challenge

bundle install

echo "replace the deafult with api url"

cd contracts

sed -i -e "s{http://localhost:4567{$1{g" *.json

cd ..

bundle exec rake "pacto:validate[$1,contracts]"