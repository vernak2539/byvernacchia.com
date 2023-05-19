#!/usr/bin/env bash

rm -rf ./dist
./node_modules/.bin/parcel build index.html
cp surprise.html ./dist
cp surprise-2.html ./dist
cp -R ./assets ./dist