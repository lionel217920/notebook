# CLI documentation

<TOC />

## install

::: tip
安装一个包会把这个包所有依赖的包都安装
:::

```bash
npm install <package>
```

查看全局安装的包

```bash
npm ls -g --depth 0
```





cnpm -v

淘宝npm的使用 使用cnpm

npm install -g cnpm --registry=https://registry.npm.taobao.org

网址：
https://developer.aliyun.com/mirror/NPM?from=tnpm

npm WARN deprecated har-validator@5.1.5: this library is no longer supported
/Users/lionel/.nvm/versions/node/v10.15.3/bin/cnpm -> /Users/lionel/.nvm/versions/node/v10.15.3/lib/node_modules/cnpm/bin/cnpm
+ cnpm@6.1.1
added 685 packages from 970 contributors in 9.852s



# npx 介绍
npx主要解决了哪些问题，调用项目中安装的模块
http://www.ruanyifeng.com/blog/2019/02/npx.html




https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8

## About
NPM stands for Node Package Manager

## CLI (Command Line Interface)

## packages and modules

NPM注册中心包含许多包，包下面有许多node模块

A package is a file or directory that is described by a package.json file

A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.


package.json
package-lock.json

package.json是npm的东西

查看`服务器上`的包的版本信息

```sh
npm view docsify versions
```

```sh
npm view docsify version
```

```sh
npm info docsify
```

查看`本地`安装的包的版本信息

```sh
npm ls webpack
```

```sh
npm ls webpack -g
```

出现权限错误,执行下面两个步骤

```bash
sudo chown -R lionel:lionel ~/.npm
```

```bash
sudo chown -R lionel:lionel ~/.config
```

根据`package.json`将依赖的包下载下来

```bash
npm install
```

下载`ejs`日志

```
Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN babel-eslint@10.0.3 requires a peer of eslint@>= 4.12.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 882 packages from 712 contributors and audited 17802 packages in 36.228s
found 12 vulnerabilities (5 low, 1 moderate, 6 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

`package-lock.json`
npm notice created a lockfile as package-lock.json. You should commit this file.

