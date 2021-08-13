// nav
module.exports = [{
        text: '前端|后端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            { text: 'HTML', link: '/pages/00b11a/' },
            { text: 'CSS', link: '/pages/6cc4d3/' },
            { text: 'Go', link: '/pages/d92a21/' },

        ],
    },
    {
        text: '框架|软件',
        link: '/software/',
        items: [
            { text: 'Vue', link: '/pages/916d34/' },
        ],
    },
    {
        text: '系统|硬件',
        link: '/system/',
        items: [
            { text: 'Linux', link: '/pages/f15d96/' },
        ],
    },
    {
        text: '学业|英语',
        link: '/study/',
        items: [
            { text: '四级', link: '/pages/0fcaec/' },
        ]
    },
    {
        text: '基础',
        link: '/base/',
        items: [
                { text: '面向对象', link: '/pages/4e5da2/' },
            ]
            // items: [
            //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
            //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
            //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
            // ],
    },
    {
        text: '扩展',
        link: '/extend/',
        items: [
            { text: 'AE', link: '/pages/b48bac/' },
        ],
    },
    {
        text: '其他',
        link: '/other/',

    },
]