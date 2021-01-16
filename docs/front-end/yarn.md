# command-line commands

__Yarn__ 提供一系列丰富的命令行命令，这些命令在使用Yarn包的时候，包括安装，管理，发布等提供了一些列的帮助。

<TOC />

## yarn add

```bash
yarn add <package> -D
```

## yarn remove

```bash
yarn remove <package...>
```

运行`yarn remove foo`会从依赖中移除`foo`这个包，更新`package.json`和`yarn.lock`文件。

其他的开发者可以通过运行`yarn install`去同步自己的`node_modules`目录

当移除一个包，会移除所有类型的依赖，比如`dependencies`，`devDependencies`

::: tip
`yarn remove`会更新`package.json`和`yarn.lock`文件。这样确保开发同一项目的不同的开发者都有相同的依赖。
:::

::: tip
`yarn remove <package> --flag`和`yarn install`使用相同的`flag`参数
:::

## yarn init
