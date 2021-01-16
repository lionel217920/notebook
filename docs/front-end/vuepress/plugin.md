# VuePress插件总结

::: danger 注意
这里我只列举了我使用到的一些插件
:::

<TOC />

[[toc]]

### 官方的插件

**Maintained by** [vuejs/vuepress](https://github.com/vuejs/vuepress)

- [active-header-links](https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html)

- [back-to-top](https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html)

- [last-updated](https://v1.vuepress.vuejs.org/plugin/official/plugin-last-updated.html)

- [medium-zoom](https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html)

- [search](https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html)

- [nprogress](https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html)

**Maintained by** [vuepress/vuepress-community](https://github.com/vuepress/vuepress-community)

- [container](https://vuepress.github.io/en/plugins/container/#installation)

::: theorem Newton's First Law
In an inertial frame of reference, an object either remains at rest or continues to move at a constant velocity, unless acted upon by a force.

::: right
From [Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
:::

::: tip
Tip container of `@vuepress/theme-default`
:::

- [mathjax](https://vuepress.github.io/en/plugins/mathjax/)

> We have $a>n <=> a>=n+1$, if $a, n\in\Z$

- [table-of-contents](https://vuepress.github.io/en/plugins/table-of-contents/)

<TOC />

### 社区的插件

- [vuepress-plugin-element-tabs ](https://superbiger.github.io/vuepress-plugin-tabs/) - Tab插件

:::: tabs type:border-card
::: tab title1 lazy
__markdown content__
:::
::: tab title2 lazy
```javascript
() => {
  console.log('Javascript code example')
}
```
:::
::::

- [vuepress-plugin-flowchart](https://flowchart.vuepress.ulivz.com/#install) - 流程图插件

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

---

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
