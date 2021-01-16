# Webpack
安装后，可以通过`CLI`或者`API`和webpack进行交互

## 什么是webpack
现代Javascript应用程序的静态模块`打包器`。

!> Webpack被用来编译JavaScript模块，将一些独立的模块，比如很多个js文件打包成一个js文件

先理解`bundle`这个单词
n. 捆；束；包；
v. 捆；把 ... 扎成一捆

webpack是一个`打包工具`，可以将项目中所有的`资源`打包，这些资源包含`css样式`，`js脚本`，`图片`。


## 如何使用它




module.exports

Webpack is a modular build tool that has two sets of functionality 

1. Loaders
2. plugins

```js
import webpack from 'webpack';

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
  output: {
    publicPath: ASSET_PATH
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ]
};
```
require是webpack的关键字
