const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ["style-loader", "css-loader"]
  //       },
  //       {
  //         test: /\.(png|svg|jpg|gif)$/,
  //         use: ["file-loader?name=img/[name].[hash:8].[ext]"]
  //       },
  //       {
  //         test: /\.(woff|woff2|eot|ttf|otf)$/,
  //         use: ["file-loader?name=img/[name].[hash:8].[ext]"]
  //       }
  //     ]
  //   }
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ]
};
