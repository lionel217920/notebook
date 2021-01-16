# VuePress在Markdown上的扩展

[[toc]]

## Emoji

[Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## Custom Containers

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::

## Line Highlighting

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```