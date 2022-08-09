const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      asset: require.resolve("assert"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    watchFiles: path.join(__dirname, "src", "**"),
    host: "localhost",
    port: 3640,
  },
};
