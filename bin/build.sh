#!/usr/bin/env bash

rm -rf ./dist
./node_modules/.bin/parcel build index.html
cp surprise.html ./dist
cp -R ./assets ./dist