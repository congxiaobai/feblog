module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base:'/feblog/',
  themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Book', link: '/book/' },
    ],
    sidebar: {
        '/book/':[{
            title: 'Group 1', // 必要的
            path: '/book/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: [['book1','书本']],
        },{
          title: 'Group 2', // 必要的
          path: '/book/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [['book1','书本']],
      }],
        '': [['/','首页']],
    },
    search: false,
},
}