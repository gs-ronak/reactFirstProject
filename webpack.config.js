var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

 
var config = {
  entry: DEV + "/index.jsx",
  cache: true,
  debug: true,
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },

  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
    }]
  }



};
module.exports = config; 
