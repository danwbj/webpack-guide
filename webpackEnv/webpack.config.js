// 2，定义主文件的入口和最终打包的位置已经名字。
let path = require("path"); //这里需要引用path这个模块
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.jsx", //webpack打包入口js文件，我在src下面创建了一个index.js
  output: {
    filename: "bundle.js", //打包输入文件的名字
    path: path.resolve("./dist") //这里需要引入node内置的模块path，path.resolve方便我们解析路径片段(./dist)为绝对路径
  },
  //module--模块的加载相关，我们就定义在module.rules(为什么不是loaders，下面有解释)中。这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。比如说给less文件定义串联的三个加载器：
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html"
    })
  ]
};
