const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const webpack = require("webpack");
const UUID = require("uuid");
module.exports = {
  entry: {
    index: "./src/index.js"
    // another: "./src/another-module.js"
  },
  output: {
    // publicPath: "/",
    // filename: "[name].bundle.js",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
      //   {
      //     test: /\.(png|svg|jpg|gif)$/,
      //     use: ["file-loader?name=img/[name].[hash:8].[ext]"]
      //   },
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/,
      //     use: ["file-loader?name=img/[name].[hash:8].[ext]"]
      //   }
    ]
  },
  optimization: {
    // runtimeChunk: {
    //   name: "manifest"
    // }
    // splitChunks: {
    //   chunks: "all",
    //   minSize: 30000,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   name(module) {
    //     let uuid = UUID.v1()
    //       .toString()
    //       .split("-");
    //     return "vendors."  uuid[0];
    //   },
    //   cacheGroups: {
    //     vendor: {
    //       test: /node_modules/,
    //       chunks: "initial",
    //       name: "vendor",
    //       priority: 10
    //     },
    //     common: {
    //       chunks: "initial",
    //       name: "common",
    //       minSize: 0,
    //       priority: 2
    //     },
    //     styles: {
    //       name: "styles",
    //       test: /\.scss|less|css$/,
    //       chunks: "all",
    //       enforce: true
    //     }
    //   }
    // }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "webpack demo"
    })
    //webpack3的用法，4之后改方法已经移除，使用config.optimization.splitChunks方式替换，见上面配置
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common" // 指定公共 bundle 的名称。
    // })
  ]
};
