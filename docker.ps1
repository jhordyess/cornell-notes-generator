cp -r ./docs/ ./docker/docs/
cp -r ./src/ ./docker/src/
cp ./package.json ./docker/
cp ./webpack.config.js ./docker/
docker build -t jhordyess/conoge ./docker
docker run -d --rm -p 80:80 jhordyess/conoge
rm -r docker/docs
rm -r docker/src
rm docker/package.json
rm docker/webpack.config.js