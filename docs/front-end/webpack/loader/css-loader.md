# css-loader
::: info
`css-loader`可以翻译`@import`和`url()`语法，比如`import`，`require`，然后开始解析他们。
:::

## 开始使用
首先要安装`css-loader`
```js
npm install --save-dev css-loader
```

添加配置文件`webpack.config.js`
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

在输入文件中声明
```js
import css from 'file.css';
```


