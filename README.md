### webpack 使用过程中知识记录

##### webpack 可以本地安装也可以全局安装，webpack-cli 是命令行运行 wenpack 命令的工具

##### 加载资源

- css

```
import './style.css'
```

添加 style-loader 和 css-loader

- 图片
  添加 file-loader
  import MyImage from './my-image.png'或者 url('./my-image.png')等方式都会使用这个过程处理
- 字体
  添加 file-loader

- 数据
  如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader

##### HtmlWebpackPlugin 插件自动生成 html，可以使用模板

##### clean-webpack-plugin 插件自动清理 dist/目录

##### devtool: 'inline-source-map' 开发工具，定位错误到具体的文件，，而不是打包后的 bundle.js 文件

##### 为了每次更新不需要重新手动运行 npm run build 可以使用下面三种方式自动编译代码

1. webpack's Watch Mode
   只会自动编译代码，不会自动刷新浏览器

2. webpack-dev-server
   需要在 webpack 配置中增加 devServer
   启动脚本： "start": "webpack-dev-server --open"

3. webpack-dev-middleware
   配合 express server 使用

##### 代码分离

有三种常用的代码分离方法：

入口起点：使用 entry 配置手动地分离代码。

此方法会造成多处引用的库被重复打包到不同的 bundle 中

防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。

CommonsChunkPlugin 是 webpack3 的用法，webpack4 之后改方法已经移除，使用 config.optimization.splitChunks 方式替换

动态导入：通过模块的内联函数调用来分离代码。
react 框架中使用 react-loadable 实现代码分离

##### webpack4 中 mode

webpack4 中 mode 的配置会自动自动根据配置的值（development/production）默认加载一些插件，如下：

```javascript
  // webpack.production.config.js
  module.exports = {
+   mode: "production",
    plugins: [
-     new UglifyJsPlugin(/* ... */),
-     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-     new webpack.optimize.ModuleConcatenationPlugin(),
-     new webpack.NoEmitOnErrorsPlugin()
    ]
  }
  // webpack.development.config.js
  module.exports = {
+   mode: "development",
    plugins: [
-     new webpack.NamedModulesPlugin(),
-     new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    ]
  }
```

##### webpack 与 ts 集成

- npm install --save-dev typescript ts-loader
- 增加 tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "sourceMap": true
  }
}
```

##### webpack 配置

```js
const path = require("path");

module.exports = {
  entry: "./src/index.ts", //修改入口为./src/index.ts
  module: {
    rules: [
      //增加ts-loader
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"] //自动解析确定的扩展。默认值为：extensions:[".js", ".json"]
    //能够使用户在引入模块时不带扩展，此处增加.tsx,.ts
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
