```
 "devDependencies": {
    "babel-core": "^6.26.0", //编译源码到其他源码 babel主要工作的核心模块
    "babel-loader": "^7.1.4",//babel加载其他loader的主要模块
                                //babel-preset 系列打包了一组插件
    "babel-preset-es2015": "^6.24.1", //打包了 es6 的特性
    "babel-preset-react": "^6.24.1",//编译react  jsx的文件
    "babel-preset-stage-0": "^6.24.1",//S7一些提案的支持，Babel通过插件的方式引入，让Babel可以编译ES7代码
    "css-loader": "^0.28.11",   //css的兼容前缀prefx都会自动处理 配合style-loader使用
    "file-loader": "^1.1.11",//引入其他文件
    "html-webpack-plugin": "^3.2.0",//引入html模板
    "less-loader": "^4.1.0", //编译less
    "style-loader": "^0.20.3", //css文件作为<style>的内容插入到模版文件配合css-loader使用
    "url-loader": "^1.0.1",//引入url
    "webpack": "^4.5.0",  //这个还需要说么。。
    "webpack-cli": "^2.0.14",//webapck4以后的新模块，
    "webpack-dev-server": "^3.1.2"//webpack服务
  }
```