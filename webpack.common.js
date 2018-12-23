const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js"
  },
  output: {
    // publicPath: "/",
    filename: "[name].bundle.js",
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
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "webpack demo"
    })
  ]
};
