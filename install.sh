#!/bin/bash
sudo npm i -g npm@latest

npm i react@^17 react-dom@^17
npm i react-color
npm i @react-pdf/renderer

npm i -D webpack webpack-cli webpack-dev-server path
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
npm i -D style-loader css-loader
#? https://react-pdf.org/advanced#webpack-5
npm i -D process browserify-zlib stream-browserify util buffer assert
