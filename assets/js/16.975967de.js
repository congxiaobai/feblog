(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{398:function(a,t,e){"use strict";e.r(t);var s=e(45),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("在构建网络应用时，动画已经开始扮演一个很重要的角色。用户的注意力转移到了UX上，商业也逐渐认识到愉悦的用户体验带来的价值。所以网络应用逐渐变重，承载了很多动态特性。如今用户已经天然的期望网站交互友好，且响应迅速。")]),a._v(" "),e("p",[a._v("但是动画并不那么简单。动画的时机，对象，以及效果都是很模糊的。")]),a._v(" "),e("h1",{attrs:{id:"js-vs-css-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-vs-css-动画"}},[a._v("#")]),a._v(" JS vs CSS 动画")]),a._v(" "),e("p",[a._v("两种主要的动画方式是使用CSS和JS。选择哪种方案，没有对错之分，只是看你想实现哪种效果")]),a._v(" "),e("h2",{attrs:{id:"css动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css动画"}},[a._v("#")]),a._v(" CSS动画")]),a._v(" "),e("p",[a._v("CSS动画是最简单的方式，让东西在屏幕上移动。\n我们看一个例子，看如何将一个元素在X，Y轴上都移动50px。这个例子是使用CSS移动完成的，耗费1000ms。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".box {\n  -webkit-transform: translate(0, 0);\n  -webkit-transition: -webkit-transform 1000ms;\n\n  transform: translate(0, 0);\n  transition: transform 1000ms;\n}\n\n.box.move {\n  -webkit-transform: translate(50px, 50px);\n  transform: translate(50px, 50px);\n}\n")])])]),e("p",[a._v("添加上"),e("code",[a._v("move")]),a._v("类，"),e("code",[a._v("transform")]),a._v("的值改编了，然后开始移动。")]),a._v(" "),e("p",[a._v("除了过渡的时间，还有一个选项 "),e("strong",[a._v("缓动")]),a._v("，表现的是动画感觉。稍后我们讨论更多细节。\n像上面那样创建单独的CSS类来管理动画，然后用户就可以使用JS切换动画的开关\n如下元素")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<div class="box">\n  Sample content.\n</div>\n')])])]),e("p",[a._v("使用JS来切换动画开关：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var boxElements = document.getElementsByClassName('box'),\n    boxElementsLength = boxElements.length,\n    i;\n\nfor (i = 0; i < boxElementsLength; i++) {\n  boxElements[i].classList.add('move');\n}\n")])])]),e("p",[a._v("通过给所有 "),e("code",[a._v("box")]),a._v(" class的元素 添加"),e("code",[a._v("move")]),a._v(" class来触发动画。")]),a._v(" "),e("p",[a._v("这么做，你可以使用JS管理状态，然后给目标元素设置合适的样式类，然后把动画交给浏览器来处理了。如果这么做，你还可以监听"),e("code",[a._v("transitionend")]),a._v("事件（除了兼容老版IE）")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c8b1cfe445b4fbe978fe6091fffc057~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("p",[e("code",[a._v("transitioned")]),a._v("事件会在动画末尾触发，像这样")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var boxElement = document.querySelector('.box'); // Get the first element which has the box class.\nboxElement.addEventListener('transitionend', onTransitionEnd, false);\n\nfunction onTransitionEnd() {\n  // Handle the transition finishing.\n}\n")])])]),e("p",[a._v("除了使用CSS过渡，还可以使用后CSS动画，这样可以控制每一个独立的关键帧，时间和循环次数。")]),a._v(" "),e("blockquote",[e("p",[a._v("关键帧用来通知浏览器在规定时间点上的CSS属性，然后填充空白")])]),a._v(" "),e("p",[a._v("举个栗子：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/**\n * This is a simplified version without\n * vendor prefixes. With them included\n * (which you will need), things get far\n * more verbose!\n */\n.box {\n  /* Choose the animation */\n  animation-name: movingBox;\n\n  /* The animation’s duration */\n  animation-duration: 2300ms;\n\n  /* The number of times we want\n      the animation to run */\n  animation-iteration-count: infinite;\n\n  /* Causes the animation to reverse\n      on every odd iteration */\n  animation-direction: alternate;\n}\n\n@keyframes movingBox {\n  0% {\n    transform: translate(0, 0);\n    opacity: 0.4;\n  }\n\n  25% {\n    opacity: 0.9;\n  }\n\n  50% {\n    transform: translate(150px, 200px);\n    opacity: 0.2;\n  }\n\n  100% {\n    transform: translate(40px, 30px);\n    opacity: 0.8;\n  }\n}\n")])])]),e("p",[a._v("看起来像这样 (quick demo) — "),e("a",{attrs:{href:"https://sessionstack.github.io/blog/demos/keyframes/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://sessionstack.github.io/blog/demos/keyframes/"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("使用CSS动画，你可以定义动画本身（与元素无关），然后使用动画属性名去选择需要的动画效果。")]),a._v(" "),e("p",[a._v("CSS动画依然有一些厂商前缀，比如在Safari， Safari Mobile,  Android上使用"),e("code",[a._v("-webkit-")]),a._v("。Chrome, Opera, Internet Explorer, and Firefox 都不用使用前缀。 很多工具可以帮助你创建你需要的CSS前缀版本，这样就不用在代码中写前缀了。")]),a._v(" "),e("h2",{attrs:{id:"javascript动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript动画"}},[a._v("#")]),a._v(" JavaScript动画")]),a._v(" "),e("p",[a._v("使用JS动画跟CSS过渡和动画相比，都复杂的多，但是却给开发者带来了更多的控制权。")]),a._v(" "),e("p",[a._v("JS动画需要写在代码中，作为你代码的一部分。你可以把他们封装到其他对象中。下为复现之前描述的 CSS 过渡的 JavaScript 代码：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var boxElement = document.querySelector('.box');\nvar animation = boxElement.animate([\n  {transform: 'translate(0)'},\n  {transform: 'translate(150px, 200px)'}\n], 500);\nanimation.addEventListener('finish', function() {\n  boxElement.style.transform = 'translate(150px, 200px)';\n});\n")])])]),e("p",[a._v("web动画默认只是修改一个元素的表现。如果想让你的对象保留在它的目标位置，当动画结束之后，你可以修改它的底层样式。这就是我们监听"),e("code",[a._v("finish")]),a._v(" 事件的原因，然后设置 "),e("code",[a._v("box.style.transform")]),a._v("属性为"),e("code",[a._v("translate(150px, 200px)")]),a._v("，该属性值和 CSS 动画执行的第二个样式转换是一样的。")]),a._v(" "),e("p",[a._v("使用JS动画，你可以在每一步完全控制元素的样式。你可以给动画降速，暂停，停止，翻转，操作。当你构建复杂，面向对象的应用，因为你可以适当的封装它们。")]),a._v(" "),e("h1",{attrs:{id:"什么是缓动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓动"}},[a._v("#")]),a._v(" 什么是缓动")]),a._v(" "),e("p",[a._v("自然平滑地移动会让网络应用拥有更好的用户交互体验。")]),a._v(" "),e("p",[a._v("没有事物是线性的从一个点到另一个点的。实际上，在现实世界中物体的移动是要加速或者加速的。人类的大脑熟悉这样的物体运动，所以在应用中使用动画时，利用这个知识效果更好。")]),a._v(" "),e("p",[a._v("先理解一些概念：")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("“缓入”")]),a._v(" — 慢慢开始运动，然后加速")]),a._v(" "),e("li",[e("strong",[a._v("“缓出”")]),a._v("  — 快速开始运动，然后减速")])]),a._v(" "),e("p",[a._v("两者可以结合， “缓出入”.缓动会让你的动画看起来更自然。")]),a._v(" "),e("h2",{attrs:{id:"缓动关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓动关键字"}},[a._v("#")]),a._v(" 缓动关键字")]),a._v(" "),e("p",[a._v("CSS过渡和缓动允许你选择你想要的类型，有一些不同的关键字影响到动画的缓动效果。你也可以自自定义一些缓动效果。")]),a._v(" "),e("p",[a._v("常用的缓动关键字有这些：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("linear")]),a._v("（线性）")]),a._v(" "),e("li",[e("code",[a._v("ease-in")]),a._v("（缓入）")]),a._v(" "),e("li",[e("code",[a._v("ease-out")]),a._v("（缓出）")]),a._v(" "),e("li",[e("code",[a._v("ease-in-out")]),a._v("（缓出入）")])]),a._v(" "),e("p",[a._v("看看他们真实的效果")]),a._v(" "),e("h2",{attrs:{id:"linear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linear"}},[a._v("#")]),a._v(" Linear")]),a._v(" "),e("p",[e("strong",[a._v("linear")]),a._v(" 是指没有任何缓动效果")]),a._v(" "),e("p",[a._v("它的过渡效果图长这样")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7fe97ec497b4bb9a8b18da91e90c7f2~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("p",[a._v("linear 效果是匀速的，这使得效果看起开并不真实。因此避免使用它")]),a._v(" "),e("p",[a._v("一个简单的例子实现它：\n"),e("code",[a._v("transition: transform 500ms linear;")])]),a._v(" "),e("h2",{attrs:{id:"ease-out"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ease-out"}},[a._v("#")]),a._v(" Ease-out")]),a._v(" "),e("p",[a._v("动画快速启动，在最后减速。过渡效果图长这样")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebb2e37defb648a38d144a87e2189f8f~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("p",[a._v("UI中使用缓出是最好的，因为它快速启动，让人感觉响应很快。而结束时让人感觉很平滑这得归功于不一致的移动速度。")]),a._v(" "),e("p",[a._v("有很多办法实现这样的效果，最简单是使用 css 中"),e("code",[a._v("ease-out")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("transition: transform 500ms ease-out;\n")])])]),e("h2",{attrs:{id:"ease-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ease-in"}},[a._v("#")]),a._v(" Ease-in")]),a._v(" "),e("p",[a._v("缓入的效果跟缓出是相反的---启动很慢，结束时很快。它的过渡效果长这样：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ea02e7b857245af8e1f7759f3e8a4c5~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("p",[a._v("跟缓出相比，缓入非常反直觉。它启动很慢，让人感觉响应很慢。而结束很快，让人感觉也很奇怪，因为整个动画一直在加速，而现实世界中当事物突然停止运动的时候会减速而不是加速。\n跟缓出相似，你可以使用CSS关键字")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("transition: transform 500ms ease-in;\n")])])]),e("h2",{attrs:{id:"ease-in-out"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ease-in-out"}},[a._v("#")]),a._v(" Ease-in-out")]),a._v(" "),e("p",[a._v("这个动画合并了缓入和缓出，它的动效图长这样")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adb57034adc945da91fae06dad701d0d~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("p",[a._v("不要让动效持续时间太久，会让感觉你的UI没有响应。\n同样可以使用CSS关键字实现：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("transition: transform 500ms ease-in-out;\n")])])]),e("h2",{attrs:{id:"定制缓动效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制缓动效果"}},[a._v("#")]),a._v(" 定制缓动效果")]),a._v(" "),e("p",[a._v("你可以自定义自己的 easing 曲线，这样就更有效地控制项目中的动画。")]),a._v(" "),e("p",[a._v("实际上， "),e("code",[a._v("ease-in")]),a._v("，"),e("code",[a._v("linear")]),a._v(" 及 "),e("code",[a._v("ease")]),a._v(" 关键字映射到预定义"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve",target:"_blank",rel:"noopener noreferrer"}},[a._v("贝塞尔曲线 "),e("OutboundLink")],1),a._v("，可以在 "),e("a",{attrs:{href:"http://www.w3.org/TR/css3-transitions/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS transitions specification"),e("OutboundLink")],1),a._v(" 和 "),e("a",{attrs:{href:"https://w3c.github.io/web-animations/#scaling-using-a-cubic-bezier-curve",target:"_blank",rel:"noopener noreferrer"}},[a._v("Web Animations specification"),e("OutboundLink")],1),a._v(" 中查找更多关于贝塞尔曲线的内容。")]),a._v(" "),e("h2",{attrs:{id:"贝塞尔曲线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贝塞尔曲线"}},[a._v("#")]),a._v(" 贝塞尔曲线")]),a._v(" "),e("p",[a._v("看看贝塞尔曲线是如何工作的 。贝塞尔曲线有两对值。每一对数值内包含表示三次贝塞尔曲线控制点的 X 和 Y 坐标。贝塞尔曲线的起点是(0, 0)，终点的左边是(1, 1)。你可以设置每一对的值，每个控制点的 X 轴值必须在 [0, 1] 之间，而 Y 轴值可以超过 [0, 1]，虽然规范并没有明确允许超过的数值。\n查看维基百科关于"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve",target:"_blank",rel:"noopener noreferrer"}},[a._v("贝塞尔曲线"),e("OutboundLink")],1),a._v("的说明，通俗一点讲即，现在所说的即三次贝塞尔曲线，该曲线由四个点组成，P0, P1, P2, P3 组成，那么，P0 和 P1 组成一对，P2 和 P3 组成一对，P1 和 P2 即为控制点，P0 和 P3 即为起始和结束节点。如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed37e6b2e5e748ca95f27ca4dfe8b5ab~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),a._v(" "),e("p",[a._v("X和Y的微小差异，也会有很大的区别。看下两张拥有相近但不同坐标的控制结点的贝塞尔曲线图。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5625033914d0447293bfc2d12da8a72e~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),a._v(" and")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aad040f72b6b4eafa0f0c179e5f30b64~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),a._v("\n这两个图差异很大，但是差别很小。第一个控制点矢量差异为 (0.045, 0.183)，而第二个控制点矢量差异为 (-0.427, -0.054)。")]),a._v(" "),e("p",[a._v("第二个线的CSS是这样：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("transition: transform 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);\n")])])]),e("p",[a._v("第一组数值为起始控制点的 X 和 Y 坐标而第二组数值为第二个控制点的 X 和 Y 坐标。")]),a._v(" "),e("h1",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[a._v("#")]),a._v(" 性能优化")]),a._v(" "),e("p",[a._v("使用动画时，需要始终维持60fps ，否则影响用户体验。")]),a._v(" "),e("p",[a._v("但是动画也不是免费的。一些属性的动画性能开销会小一点。但是，为元素的 "),e("code",[a._v("width")]),a._v(" 和 "),e("code",[a._v("height")]),a._v(" 做动画会更改其几何结构并且可能会造成页面上的其它元素移动或者大小的改变。这一过程被称为布局。我们在第11章讨论过。")]),a._v(" "),e("p",[a._v("总之，应该尽量避免为会引起布局和绘制的属性做动画。对于大多数现代浏览器而言，即把动画局限于 "),e("code",[a._v("opacity")]),a._v(" 和 "),e("code",[a._v("transform")]),a._v(" 属性。")]),a._v(" "),e("h2",{attrs:{id:"will-change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#will-change"}},[a._v("#")]),a._v(" Will-change")]),a._v(" "),e("p",[a._v("你可以使用"),e("code",[a._v("will-change")]),a._v(" 告知浏览器，你将会改变元素属性，这让浏览器提前开始选择合适的优化策略。但是不要过渡使用"),e("code",[a._v("will-change")]),a._v("，因为会引起浏览器浪费资源，最后反而影响了性能。")]),a._v(" "),e("p",[a._v("为 transforms 和 opacity 添加 "),e("code",[a._v("will-change")]),a._v(" 代码如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".box {\n  will-change: transform, opacity;\n}\n")])])]),e("p",[a._v("看一下浏览器支持的情况")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5875f3d6078b47928cb4b4a690d623ed~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),a._v(" "),e("h2",{attrs:{id:"在js和css中选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在js和css中选择"}},[a._v("#")]),a._v(" 在JS和CSS中选择")]),a._v(" "),e("p",[a._v("选择JS和CSS不是对错的问题，选谁都可以。在选择时，可以遵循这些原则：")]),a._v(" "),e("ul",[e("li",[e("em",[a._v("基于CSS的动画，原生支持的Web动画，往往被“合成线程”来处理的")]),a._v(".这个线程跟主线程不同，主线程处理样式，布局，绘制，执行JS。这意味着，如果浏览器在主线程中执行繁重的任务，这些动画可以持续运行而不会被打断。")]),a._v(" "),e("li",[a._v("很多时候，也可以由合成线程来处理 "),e("code",[a._v("transforms")]),a._v(" 和 "),e("code",[a._v("opacity")]),a._v(" 属性值的更改。")]),a._v(" "),e("li",[a._v("如果触发了绘制或者布局，就会要求主线程来处理。不管是基于CSS还是JS的动画，绘制和布局的开销都会让阻塞CSS和JS的执行。")])]),a._v(" "),e("h2",{attrs:{id:"选择合适的动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的动画"}},[a._v("#")]),a._v(" 选择合适的动画")]),a._v(" "),e("p",[a._v("良好的动画为项目增添了令人愉快和互动的用户体验。你可以随意使用动画，不管是宽度，调试，定位，颜色或背景色，但必须注意潜在的性能瓶颈。糟糕的动画选择会影响用户体验，所以动画必须是高效和适当的。尽可能减少使用动画。只使用动画来让用户体验流畅自然而不是滥用。")]),a._v(" "),e("h2",{attrs:{id:"使用动画支持交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用动画支持交互"}},[a._v("#")]),a._v(" 使用动画支持交互")]),a._v(" "),e("p",[a._v("不要因为你可以，就去使用动画。相反的，战略性的使用动画去"),e("em",[a._v("加强")]),a._v("用户交互体验。如非必要，不要使用动画打断或者阻塞用户行为。")]),a._v(" "),e("h2",{attrs:{id:"拒绝开销昂贵的动画属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拒绝开销昂贵的动画属性"}},[a._v("#")]),a._v(" 拒绝开销昂贵的动画属性")]),a._v(" "),e("p",[a._v("唯一比动画更糟的事情是放置不当导致页面卡段。这种动画让用户感觉更不舒服。")])])}),[],!1,null,null,null);t.default=n.exports}}]);