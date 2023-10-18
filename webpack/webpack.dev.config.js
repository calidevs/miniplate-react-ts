/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: paths.dist,
    hot: true,
  },
  devtool: "inline-source-map",
});
