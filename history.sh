#? Commands history
# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
npm i react@^17 react-dom@^17

npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

# Bundler
npm i -D webpack webpack-cli webpack-dev-server webpack-bundle-analyzer
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader style-loader
npm i -D clean-webpack-plugin

# Hosting
npm i -D gh-pages

# Extra commands
npm i react-color @react-pdf/renderer

#? https://react-pdf.org/advanced#webpack-5
npm i -D process browserify-zlib stream-browserify util buffer assert
