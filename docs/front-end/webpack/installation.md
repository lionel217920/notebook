# 安装

在安装之前，先要安装`Node.js`。当前`LTS版本`是比较理想的选择，如果安装比较老的版本会带来一些不必要的麻烦

官方文档提供来两种安装方式，一种是`本地安装`，一种是`全局安装`。
!> 不推荐使用全局安装，全局安装会锁定特定版本的web包，可能会在使用不同版本的项目中失败。

安装最新版本
```js
npm install --save-dev webpack
```
安装指定版本
```js
npm install --save-dev webpack<version>
```
::: warning
本地安装是大多数项目所推荐的。这使得在引入重大更改时，可以轻松的单独升级项目。
:::

## npm

```js
"scripts": {
	"build": "webpack --config webpack.config.js"
}
```

```shell
npx webpack
```