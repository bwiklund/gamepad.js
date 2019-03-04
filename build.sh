#!/bin/bash
set -e

rm -rf build
mkdir build
./node_modules/.bin/coffee --output build/ -c source/*.coffee && \
  ./node_modules/.bin/stylus source/*.styl -o build/ && \
  ./node_modules/.bin/pug source/*.pug -o build/ && \
  cp source/angular.min.js build/