# GitHub Flavored Markdown

GitHub Flavored Markdown, often shortened as GFM, is the dialect of Markdown that is currently supported for user content on GitHub.com and GitHub Enterprise.

__GitHub.com__ 使用自己的版本的Markdown语法,提供了一组额外的有用的功能.

相关文档

- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
- [Writing on GitHub](https://docs.github.com/en/free-pro-team@latest/github/writing-on-github)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Flavored Markdown](https://docs.github.com/enterprise/11.10.340/user/articles/github-flavored-markdown)

## Fenced code blocks

使用 **```** 

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## Syntax highlighting

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

## Task Lists

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables

- left-aligned  :------------
- right-aligned  ------------:
- center-aligned  :------------:

```md
First Header | Second Header
:------------ | :-------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

## Strikethrough

```md
~~Mistaken text.~~
```

~~Mistaken text.~~

## URL autolinking

GFM will autolink standard URLs, so if you want to link to a URL (instead of setting link text), you can simply enter the URL and it will be turned into a link to that URL

http://www.baidu.com

## Emoji

:notebook: :+1:

## GitHub Flavored Markdown Spec

基于[CommonMark Spec](/commonmark)，其中又额外扩展了一些语法，比如

- [Tables](https://github.github.com/gfm/#tables-extension-)

- [Task list items](https://github.github.com/gfm/#task-list-items-extension-)

- [Strikethrough](https://github.github.com/gfm/#strikethrough-extension-)

- [Autolinks](https://github.github.com/gfm/#autolinks-extension-)