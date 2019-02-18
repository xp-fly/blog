module.exports = {
    title: 'xp-fly\'s blog',
    description: '我的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/blog/', // 这是部署到github相关的配置
    themeConfig: {
        nav:[ // 导航栏配置
            {text: 'Home', link: '/' },
            {
                text: 'Blog',
                items: [
                    {text: 'node', link: '/node/'},
                    {text: '数据库', link: '/database/'},
                    {text: 'docker', link: '/docker/'},
                    {text: 'git', link: '/git/'},
                    {text: 'linux', link: '/linux/'},
                    {text: 'other', link: '/other/'},
                ]
            },
            {text: 'Github', link: 'https://github.com/xp-fly'}
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
        lastUpdated: 'Last Updated',
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
};
