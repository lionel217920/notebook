module.exports = {
  base: "/notebook/",
  title: 'Lionel\'s Notebook',
  description: 'Java,高并发,分布式,rpc,spring boot',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: '127.0.0.1',
  port: '8080',
  temp: "temp",
  dest: "target",

  theme: '@vuepress/theme-default',
  themeConfig: {
    //logo: '/logo.jpg',
    navbar: true,
    nav: require('./nav/nav'),
    //sidebar: 'auto',
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 2,
    sidebar: require('./sidebar/sidebar'),
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated'
  },

  plugins: [
    ['@vuepress/search', {searchMaxSuggestions: 10}],
    ['@vuepress/back-to-top', true],
    ['@vuepress/active-header-links'],
    ['@vuepress/pagination'],
    ['@vuepress/nprogress'],
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-default-content img',
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        }
      }
    ],
    ['vuepress-plugin-element-tabs'],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: '提示',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: '警告',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: '危险',
      },
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        showError: true,
        macros: {
          '*': '\\times',
          '\\Z': '\\mathbb{Z}',
        },
      },
    ],
    ['vuepress-plugin-table-of-contents'],
    ['flowchart']
  ],

  markdown: {
    lineNumbers : true
  }
}
