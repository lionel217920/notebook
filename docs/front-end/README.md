# 前端技术总结


https://risingstars.js.org/2018/en/#section-compiler

jquery `$.each()`与`$().each`的区别？

`$().each`在dom上处理的比较多

```js
$("input[name='propertyName']", $importModal).each(function() {
   if (this.checked) {
       array.push(this.value);
   }
});
```

遍历一个数组通常用`$.each()`

```js
var $list = $("#promotion-reduce .promotion-reduce-group");

$.each($list, function (index, gift) {
    var kvs = $(".form-control", this);
    $.each(kvs, function () {
        var val = $(this).val();
        if(!val || isNaN(val)){
            hasNull = true;
            return;
        }
    });
})
```
区别：



开源后台空值面板
- [AdminLTE](https://github.com/almasaeed2010/AdminLTE)
  - Bootstrap 3.x
- [vue-Element-Admin](https://github.com/PanJiaChen/vue-element-admin)
  - vue2.0
- [tabler](https://github.com/tabler/tabler)
  -  BootStrap 4
- [Gentelella](https://github.com/puikinsh/gentelella)
  - Bootstarp
- [ng2-admin](https://github.com/akveo/ngx-admin)
  - Angular 2
  - Bootstrap 4
  - Webpack
- [ant-design-pro](https://github.com/ant-design/ant-design-pro)
- [blur-admin](https://github.com/akveo/blur-admin)
- [vue-admin](https://github.com/vue-bulma/vue-admin)
- [iview-admin](https://github.com/iview/iview-admin)
- [material-dashboard](https://github.com/creativetimofficial/material-dashboard)
- [Ace admin](https://github.com/bopoda/ace)


https://medium.com/front-end-weekly/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987

现代前端插件安装方式一般有两种
1. 模块打包方式，比如webpack，先通过npm安装
2. JavaScript标签包含的方式 including it in a script tag

现代JavaScript `Modern Javascript`
从简单的HTML和JS转向`包管理器(package manager)`，来下载第三方依赖。使用模块打包器`module bundler`来创建单个脚本

module bundler such as Webpack Browserify and so on

`包管理器`:yarn and npm
`模块打包工具`:webpack and browserfiy

`现代Javascript`应用程序

模块的概念，JavaScript的模块，webpack中的模块

## Modules

`模块化编程`，即开发者将程序分解成`离散功能块`，称之为模块。

## Webpack中的模块


Which package manager would you like to use?

- yarn
- npm

Which is better ?

`Webpack` or `Gulp` or `Grunt`