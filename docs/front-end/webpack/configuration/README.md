# 配置webpack
::: warning
webpack可以不使用配置文件.
:::
如果不使用配置文件，默认情况下认为入口文件在项目的`src/index`目录中，输出结果在`dist/main.js`文件中。

通常情况下，我们的项目需要一些配置，所以在项目`根目录`创建`webpack.config.js`文件用于一些自定义配置。webpack会自动找到这个配置文件。

## 使用不同的配置文件
在`package.json`中指定配置文件
```json
"scripts": {
  "build": "webpack --config prod.config.js"
}
```

## 快速生成webpack.config.js
[在线工具](https://generatewebpackconfig.netlify.com/)

或者使用webpack自带的`cli`命令
```shell
npx webpack-cli init
```

## webpack.config.js详解
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```