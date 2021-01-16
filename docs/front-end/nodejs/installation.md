# Nodejs安装说明
`Node.js`是一个跨平台的JavaScript运行时环境，允许服务端运行在JavaScript代码上。

`npm` **Node Package Manager**，是默认的node.js的包管理工具，并且是世界上最大的开源Node.js发布软件存储库。

## 使用Yum安装
使用**yum**包管理工具安装Node.js和npm。如果使用Node.js仅仅是开发Node.js应用，那么最简单的安装方式就是通过`yum`安装。  

::: warning
添加node的依赖仓库，将NodeSource仓库添加到系统
:::

```sh
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
```

```sh
sudo yum install nodejs
```
校验安装是否成功
```sh
node --version
npm --version
```

## 使用NVM安装
NVM（**Node Version Manager**）是一个bash脚本用来管理多版本Node.js。NVM允许我们安装或卸载指定的Node.js版本，这也就意味着我们可以使用我们自己想要的Node.js版本。

> We strongly recommend using a Node version manager to install Node.js and npm.

安装NVM

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
OR

```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

使用nvm安装Node.js
```sh
nvm install node
```
查看所有版本
```sh
nvm list-remote
```
安装多个版本
```sh
nvm install v8.14.1
nvm install v10.14.2
```
查看已安装的版本
```sh
nvm ls
```
改变当前使用的版本
```sh
nvm use v8.14.1
```
使用yum安装更简单，使用nvm可以使用多版本的node.js。

# ubuntu上安装nodejs

```sh
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
```sh
nodejs --version
npm --version
```

## 更新 npm and node.js
1. see what version of npm you're running
```js
npm -v
```
2. upgrading on Linux
```js
sudo npm install -g npm
```

## mac上安装nodejs

使用nvm安装
