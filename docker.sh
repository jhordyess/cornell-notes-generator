#!/bin/bash
cp -av ./docs/ ./docker/docs/
cp -av ./src/ ./docker/src/
cp -v ./package.json ./docker/package.json
cp -v ./webpack.config.js ./docker/webpack.config.js
docker build -t jhordyess/conoge ./docker &&
  docker run -d --rm -p 80:80 jhordyess/conoge
rm -rv docker/docs docker/src docker/package.json docker/webpack.config.js
