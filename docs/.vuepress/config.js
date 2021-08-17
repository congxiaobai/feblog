module.exports = {
    title: 'Hello Code',
    base: '/feblog/',
    activeHeaderLinks: false,
    themeConfig: {
        nav: [
            { text: 'Coding集', link: '/' },
            { text: '披星集', link: '/book/' },
            { text: '荷锄集', link: '/atrcile/' },
            { text: '锄月集', link: '/han/' },
        ],
        sidebar: {
            '/book/': [
                {
                    title: 'Group 1', // 必要的
                    path: '/book/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1, // 可选的, 默认值是 1
                    children: [['book1', '书本']],
                },
                {
                    title: 'Group 2', // 必要的
                    path: '/book/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1, // 可选的, 默认值是 1
                    children: [['book1', '书本']],
                },
            ],
            '': [
                {
                    title: '与JS共舞', // 必要的
                    collapsable:true, // 可选的, 默认值是 true,
                    sidebarDepth: 0, // 可选的, 默认值是 1
                    children: [
                    ['/howjswork/1', '1.引擎，运行时，调用栈概述'],
                    ['/howjswork/2', '2.V8 引擎中书写最优代码的 5 条小技巧'],
                    ['/howjswork/3', '3.内存管理以及常见的内存泄漏处理'],
                    ['/howjswork/4', '4.Event loop和异步编程'],
                    ['/howjswork/5', '5.WebSockets 和HTTP2的正确姿势'],
                    ['/howjswork/6', '6.WebAssembly以及使用它的场景'],
                    ['/howjswork/7', '7.WebWorker和5个使用场景'],
                    ['/howjswork/8', '8.Service Workers 的生命周期和使用场景'],
                    ['/howjswork/9', '9.网页推送机制'],
                    ['/howjswork/10', '10.使用MutationObserver 跟踪 DOM 变化'],
                    ['/howjswork/11', '11.渲染引擎以及性能优化建议'],
                    ['/howjswork/12', '12.网络层内部，以及性能，安全性的优化'],
                    ['/howjswork/13', '13.CSS和JS动画以及优化建议'],
                    ['/howjswork/14', '14.AST和优化建议'],
                    ['/howjswork/15', '15.类，继承，Babel和TS的转换'],
                    ['/howjswork/16', '16.存储引擎以及使用场景'],
                    ['/howjswork/17', '17.影子DOM 内部构造及如何构建独立组件'],
                    ['/howjswork/18', '18.WebRTC 及点对点网络通信机制'],
                    ['/howjswork/19', '19.自定义元素机制'],
                    ['/howjswork/20', '20.JS的异常处理以及在异步中处理异常的办法'],
                    ['/howjswork/21', '21.XSS的5种方式和防范策略'],
                    ['/howjswork/22', '22.CRFS攻击以及7种防范策略'],
                    ['/howjswork/23', '23.迭代器以及如何获得比generator更高的控制权'],
                    ['/howjswork/24', '24.加密和中间人（MITM）攻击'],
                    ['/howjswork/25', '25.函数式编程和基本概念'],
                    ['/howjswork/26', '26.多态的3种类型'],
                    ['/howjswork/28', '28.Deno 一瞥'],
                    ['/howjswork/29', '29.JS设计模式'],
                ],
                },
            ],
        },
        search: false,
    },
};
