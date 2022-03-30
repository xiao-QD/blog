module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        // sidebar: {
        //     '/api/': [{
        //         title: 'Core',
        //         collapsable: false,
        //         children: [
        //             'application.md',
        //             'services.md',
        //             'hooks.md',
        //             'events.md',
        //             'errors.md',
        //             'configuration.md'
        //         ]
        //     }]
        // },

        sidebar: [
            // SidebarItem
            {
                text: 'guide',
                link: '/guide/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: '/guide/getting-started.md',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/guide/getting-started.md',
                ],
            },
            // 字符串 - 页面文件路径
            '/guide/README.md',
        ],
    },
}