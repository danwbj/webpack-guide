const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const webpack = require("webpack");
module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  plugins: [
    //配置了mode: "production",就不需要自己配置UglifyJSPlugin
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production") //为所有的依赖定义这个变量，因为许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容
    })
  ]
});
