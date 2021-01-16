# Loaders
loaders n.装载机，这里我翻译成加载器，其实意思都差不多。

webpack可以使用加载器(`loaders`)来处理文件。这样以来，就可以绑定任何的静态资源文件，这些文件不仅仅局限于JavaScript。可以使用Node.js编写自己的加载器。

加载器是应用于将源代码转换为模块的转换。这允许我们通过`import`来处理文件。因此，加载器可以看作是一些列的任务，并且提供一种强大的方式处理前端构建步骤。加载器可以将不同语言的文件（比如TypeScirpt）转换为JavaScript。加载器也可以直接从JavaScript模块中`import`CSS文件。

## 如何使用Loaders
如果想要使用哪一个加载器，通过指定`loadersname`来激活。
1. 在require中使用
2. 通过正则表达式在webpack配置中使用

## 为什么会有Loaders




## 举个栗子
> 使用加载器导入Css文件

1. 无论使用哪一种加载器，首先都要安装
```js
npm install --save-dev css-loader
```

2. 命令`webpack`使用加载器处理`.css`文件，在`webpack.config.js`中
```js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  }
};
```

## 使用`Loaders`
官网提供了三种方式
- 推荐的方式，在`webpack.config.js`中指定
- 在`import`语句中指定
- 通过命令行方式

### 配置的方式
先来了解一个语法`module.rules`。