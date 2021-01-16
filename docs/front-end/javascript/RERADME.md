ECMAScript是标准，而JavaScript是实现

精通原生js开发，有基于原型和对象模式开发经验
熟练使用es6开发

## JavaScript关键字

> typeof

```js
if ("undefined" === typeof type) {
  .....
}
if ($option.next().html() === undefined) {

}
```

## Modern Javascript

What's the difference between Javascript and ECMAScript ?
Javascript VA ES6

What's the difference between CommonJS and AMD

https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5


## Javascript全局对象

### 全局函数

isNaN() 检查某个值是否是数字。

```js
if(!val || isNaN(val)){
    return;
}
```

::: danger
只能判断数字，不能判断字符串
:::
