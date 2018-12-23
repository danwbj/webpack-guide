### webpack 使用过程中知识记录

webpack 可以本地安装也可以全局安装，webpack-cli 是命令行运行 wenpack 命令的工具

加载资源

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

HtmlWebpackPlugin 插件自动生成 html，可以使用模板

clean-webpack-plugin 插件自动清理 dist/目录

devtool: 'inline-source-map' 开发工具，定位错误到具体的文件，，而不是打包后的 bundle.js 文件

为了每次更新不需要重新手动运行 npm run build 可以使用下面三种方式自动编译代码

1. webpack's Watch Mode
   只会自动编译代码，不会自动刷新浏览器

2. webpack-dev-server
   需要在 webpack 配置中增加 devServer
   启动脚本： "start": "webpack-dev-server --open"

3. webpack-dev-middleware
   配合 express server 使用

实现代码分离，此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件
有三种常用的代码分离方法：

入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
动态导入：通过模块的内联函数调用来分离代码。
