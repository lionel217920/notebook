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