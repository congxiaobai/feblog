(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{372:function(e,r,t){"use strict";t.r(r);var a=t(45),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("这次来看看WebWorker:我们会总览一下不同种类的worker，它们是如何搭配的，以及在不同的场景下表现出来的优缺点。最后，提供5个挑选合适woker的场景。\n我们知道，虽然JS是单线程的，但是其实可以进行异步编程。")]),e._v(" "),t("h2",{attrs:{id:"异步编程的局限性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步编程的局限性"}},[e._v("#")]),e._v(" 异步编程的局限性")]),e._v(" "),t("p",[e._v("在EventLoop中调度延迟执行的代码，这种方式的异步编程让你的UI响应性更好，因为允许UI渲染优先执行")]),e._v(" "),t("p",[e._v("常见的异步编程是AJAX 请求。因为请求要花费很多时间，使用异步的话，在等待回应的时间，可以执行其他代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// This is assuming that you're using jQuery\njQuery.ajax({\n    url: 'https://api.example.com/endpoint',\n    success: function(response) {\n        // Code to be executed when a response arrives.\n    }\n});\n")])])]),t("p",[e._v("但这依然是个问题，因为AJAX请求是被浏览器的WEB API来处理的，如果想让其他的代码异步执行怎么办？比如，请求的成功回调是一个非常重的CPU密集型代码怎么办呢？（计算机任务一般分两种，一种是IO密集型，一种是CPU密集型("),t("a",{attrs:{href:"https://www.jianshu.com/p/5611c8272b4d",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是IO密集型和CPU密集型"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var result = performCPUIntensiveCalculation();\n")])])]),t("p",[e._v("如果"),t("code",[e._v("performCPUIntensiveCalculation")]),e._v("不是一个HTTP请求，而是一个阻塞性代码（例如一个很大的"),t("code",[e._v("for")]),e._v("循环），这样就没办法去释放EventLoop或者解冻浏览器UI----所有的用户行为都不会被响应了。"),t("br"),e._v("\n可见异步函数只是就解决了一小部分单线程引起的问题。"),t("br"),e._v("\n有时候，你可以使用"),t("code",[e._v("setTimeout.")]),e._v(" 来执行耗时很久的计算，从而让UI不那么卡顿。把一些复杂的运算，拆分到多个独立的"),t("code",[e._v("setTimeout")]),e._v("中，这样就可以在EnenvtLoop的不同位置去执行他们，从而让给UI的渲染和响应争取到时间。\n看一个简单的例子，这个例子是计算一个数组中所有数字的平均值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function average(numbers) {\n    var len = numbers.length,\n        sum = 0,\n        i;\n\n    if (len === 0) {\n        return 0;\n    } \n    \n    for (i = 0; i < len; i++) {\n        sum += numbers[i];\n    }\n   \n    return sum / len;\n}\n")])])]),t("p",[e._v("如果改成异步的话可以是这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function averageAsync(numbers, callback) {\n    var len = numbers.length,\n        sum = 0;\n\n    if (len === 0) {\n        return 0;\n    } \n\n    function calculateSumAsync(i) {\n        if (i < len) {\n            // Put the next function call on the event loop.\n            setTimeout(function() {\n                sum += numbers[i];\n                calculateSumAsync(i + 1);\n            }, 0);\n        } else {\n            // The end of the array is reached so we're invoking the callback.\n            callback(sum / len);\n        }\n    }\n\n    calculateSumAsync(0);\n}\n")])])]),t("p",[e._v("使用"),t("code",[e._v("setTimeout")]),e._v("方法，在EventLoop中添加每一步的运算。在每次计算之间，就有足够的时间，去进行其他的运算，以及浏览器的解冻。")]),e._v(" "),t("h2",{attrs:{id:"web-workers-会解决这些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-workers-会解决这些"}},[e._v("#")]),e._v(" Web Workers 会解决这些")]),e._v(" "),t("p",[e._v("H5给我们带来了很多惊喜，比如：")]),e._v(" "),t("ul",[t("li",[e._v("SSE (前一章讨论过了)")]),e._v(" "),t("li",[e._v("地理位置")]),e._v(" "),t("li",[e._v("应用换窜")]),e._v(" "),t("li",[e._v("本地存储")]),e._v(" "),t("li",[e._v("拖拽")]),e._v(" "),t("li",[t("strong",[e._v("Web Workers")])])]),e._v(" "),t("p",[e._v("Web Worker 是浏览器内置线程，你可以用它来执行JS代码。")]),e._v(" "),t("p",[e._v("JS整个范式是基于单线程环境的，WebWorker可以解决这个问题。\nWeb Worker允许开发者把耗时久和计算密集型的任务放置到后台运行，而不会阻塞UI。也不需要使用"),t("code",[e._v("setTimeout")]),e._v(" 这种奇巧淫技来处理了。\n看一下这个简单的"),t("a",{attrs:{href:"http://afshinm.github.io/50k/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),t("OutboundLink")],1),e._v(" ，理解一下使用和未使用WebWorker来做数组排序的区别。")]),e._v(" "),t("h2",{attrs:{id:"web-worker总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-worker总览"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Web Worker总览")])]),e._v(" "),t("p",[e._v("Web Workers 允许你去处理长耗时的脚本，而不阻塞UI----他们是并行执行的。Web Workers是真正的多线程。但是JS不是单线程么？")]),e._v(" "),t("p",[e._v("你应该意识到JS其实并没有定义线程模型。 "),t("em",[e._v("Web Workers 不是JS的一部分,他们是浏览器的特性，只是可以通过JS调用.")]),e._v("  大多数浏览器历史上是单线程的，大多JS实现是在浏览器中发生的。WebWorkers 没有在Node中实现--Node具有一个“cluster” 或者 “child_process”的概念，略有不同。\n注意，规范中声明了三种web worker的类型：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dedicated Workers"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shared Workers"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service workers"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"dedicated-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dedicated-workers"}},[e._v("#")]),e._v(" Dedicated Workers")]),e._v(" "),t("p",[e._v("Dedicated Web Worker是被主线程实例化的，值可以跟他通信。浏览器的支持情况如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd632f6258c94c8db6963a570712e23a~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"shared-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-workers"}},[e._v("#")]),e._v(" Shared Workers")]),e._v(" "),t("p",[e._v("Shared workers 可以被同源的线程访问 (包括不同的tab, iframes 或者其他 shared workers).浏览器的支持情况如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aebf913632d54d60b4300bbb670f2ddd~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"service-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-workers"}},[e._v("#")]),e._v(" Service Workers")]),e._v(" "),t("p",[e._v("Service Worker 是一个由事件驱动的 worker，它由源和路径组成。它可以控制它关联的网页，解释且修改导航，资源的请求，以及一种非常细粒度的方式来缓存资源以让你非常灵活地控制程序在某些情况下的行为（比如网络不可用）。浏览器的支持情况如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c80113444c644a8ad0ec9a62aeb1e56~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),e._v(" "),t("p",[e._v("本篇文章，我们将会专注于 Dedicated Workers 并以 『Web Workers』或者 『Workers』来称呼它。")]),e._v(" "),t("h2",{attrs:{id:"web-workers-是如何运行的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-workers-是如何运行的"}},[e._v("#")]),e._v(" Web Workers 是如何运行的")]),e._v(" "),t("p",[e._v("Web Workers 的实现，是像"),t("code",[e._v(".js")]),e._v(" 文件那样，在页面中包含了异步的HTTP请求。这些请求对开发者完全隐藏的。")]),e._v(" "),t("p",[e._v("Workers 利用线程类似的信息传递来达到并行效果。他们非常合适去保持UI的更新，响应。")]),e._v(" "),t("p",[e._v("Web Workers  运行在一个跟浏览器分离得线程中。因此，他们执行的代码需要被放在一个独立的文件中。这一点很重要。\n看看一个基础的woker是如何创建的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var worker = new Worker('task.js');\n")])])]),t("p",[e._v('如果"task.js"文件是可访问的，浏览器将会启动一个新线程去异步下载。一旦下载完成，将会启动woker去执行它。')]),e._v(" "),t("p",[e._v("如果文件路径返回了404，worker就是静默的失败（不抛出异常）。\n为了开始创建一个woker，你需要调用"),t("code",[e._v("postMessage")]),e._v("方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("worker.postMessage();\n")])])]),t("h2",{attrs:{id:"web-worker-通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-通信"}},[e._v("#")]),e._v(" Web Worker 通信")]),e._v(" "),t("p",[e._v("为了在Worker和创建它的页面之间通信，你需要使用"),t("code",[e._v("postMessage")]),e._v(" 方法或者一个"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broadcast Channel"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"postmessage-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postmessage-方法"}},[e._v("#")]),e._v(" postMessage 方法")]),e._v(" "),t("p",[e._v("新的浏览器支持"),t("code",[e._v("JSON")]),e._v(" 对象作为该方法第一个参数，老的浏览器只支持"),t("code",[e._v("string")]),e._v("\n看一个简单的例子，看页面如何创建一个woker并通过传递JSON对象与之来回通信，传递字符串是一样的\n看一段 HTML 页面的代码 :")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<button onclick=\"startComputation()\">Start computation</button>\n\n<script>\n  function startComputation() {\n    worker.postMessage({'cmd': 'average', 'data': [1, 2, 3, 4]});\n  }\n\n  var worker = new Worker('doWork.js');\n\n  worker.addEventListener('message', function(e) {\n    console.log(e.data);\n  }, false);\n  \n<\/script>\n")])])]),t("p",[e._v("worker部分代码像这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('message', function(e) {\n  var data = e.data;\n  switch (data.cmd) {\n    case 'average':\n      var result = calculateAverage(data); // Some function that calculates the average from the numeric array.\n      self.postMessage(result);\n      break;\n    default:\n      self.postMessage('Unknown command');\n  }\n}, false);\n")])])]),t("p",[e._v("当button 点击之后，主页面会调用"),t("code",[e._v("postMessage")]),e._v("。"),t("code",[e._v("worker.postMessage")]),e._v("这一行传递"),t("code",[e._v("JSON")]),e._v("对象给woker，并将 "),t("code",[e._v("cmd")]),e._v(" 和 "),t("code",[e._v("data")]),e._v("各自的值和key添加进去。 worker 将会通过定义的"),t("code",[e._v("message")]),e._v("句柄来处理信息")]),e._v(" "),t("p",[e._v("当message到达，worker 实际执行了计算，而不会阻塞event loop。worker 检查传递的事件"),t("code",[e._v("e")]),e._v(" ，然后就像标准JS函数那样执行。当一切结束，函数结果将会返回给主页面。")]),e._v(" "),t("p",[e._v("在Worker的上下文中，"),t("code",[e._v("self")]),e._v(" 和 "),t("code",[e._v("this")]),e._v("都指向worker的全局。")]),e._v(" "),t("blockquote",[t("p",[e._v("两种办法停止一个 worker: 主页面调用 "),t("code",[e._v("worker.terminate()")]),e._v(" 或者worker本身调用 "),t("code",[e._v("self.close()")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"broadcast-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-channel"}},[e._v("#")]),e._v(" Broadcast Channel")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broadcast Channel"),t("OutboundLink")],1),e._v(" 是为了通信更常用的API。它可以让我们广播信息到同源的所有上下文。同源的所有的浏览器tab,iframes或者worker 都可以收发信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Connection to a broadcast channel\nvar bc = new BroadcastChannel('test_channel');\n\n// Example of sending of a simple message\nbc.postMessage('This is a test message.');\n\n// Example of a simple event handler that only\n// logs the message to the console\nbc.onmessage = function (e) { \n  console.log(e.data); \n}\n\n// Disconnect the channel\nbc.close()\n")])])]),t("p",[e._v("通过下图，你可以更清晰地看到Broadcast Channels是什么样子的")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47b80d39500e4b7989ea43b77bfcf745~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("p",[e._v("不过浏览器对Broadcast Channel的支持性不是很好：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac4eb1d805444094a0b27fb9c15c3324~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"传递信息的大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传递信息的大小"}},[e._v("#")]),e._v(" 传递信息的大小")]),e._v(" "),t("p",[e._v("有两种方式传递信息给 Web Workers:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("复制消息:")]),e._v("  消息是序列化的，复制过的，发送，然后在另一端反序列化。页面和worker不会共享相同的实例，所以每次传递的时候都要创建副本。大多数浏览器是通过在任何一端自动进行 JSON 编码/解码消息值来实现这一功能。正如所预料的那样，这些对于数据的操作显著增加了消息传送的性能开销。消息越大，传送的时间越长。")]),e._v(" "),t("li",[t("strong",[e._v("传递消息:")]),e._v(" 源发送者在发送之后不能再次使用，数据传递时即时的。唯一的限制是"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArrayBuffer"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"web-worker的可用功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-worker的可用功能"}},[e._v("#")]),e._v(" Web Worker的可用功能")]),e._v(" "),t("p",[e._v("Web Workers只能获取JS的一部分功能，因为它的多线程特性 。这里是一些功能列表：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("navigator")]),e._v(" 对象")]),e._v(" "),t("li",[t("code",[e._v("location")]),e._v(" 对象 (只读)")]),e._v(" "),t("li",[t("code",[e._v("XMLHttpRequest")])]),e._v(" "),t("li",[t("code",[e._v("setTimeout()/clearTimeout()")]),e._v(" and "),t("code",[e._v("setInterval()/clearInterval()")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.html5rocks.com/tutorials/appcache/beginner/",target:"_blank",rel:"noopener noreferrer"}},[e._v("应用缓存"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("使用 "),t("code",[e._v("importScripts()")]),e._v("导入外部的脚本")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/workers/basics/#toc-enviornment-subworkers",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建其他worker"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"web-worker-局限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-局限"}},[e._v("#")]),e._v(" Web Worker 局限")]),e._v(" "),t("p",[e._v("很遗憾WebWoker不能获得一些比较关键的JS特性")]),e._v(" "),t("ul",[t("li",[e._v("DOM (线程不安全)")]),e._v(" "),t("li",[t("code",[e._v("window")]),e._v(" 对象")]),e._v(" "),t("li",[t("code",[e._v("document")]),e._v(" 对象")]),e._v(" "),t("li",[t("code",[e._v("parent")]),e._v(" 对象\n由此看，Worker 不能操作DOM。一旦你学会正确使用Worker，你将会像使用计算器一样开始使用它们，同时其他代码可以执行UI操作。Workers处理所有的重运算，然后传递结果到创建它的页面上，以便进行页面上的更新")])]),e._v(" "),t("h2",{attrs:{id:"异常处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[e._v("#")]),e._v(" 异常处理")]),e._v(" "),t("p",[e._v("As with any JavaScript code, you’ll want to handle any errors that are thrown in your Web Workers. If an error occurs while a worker is executing, the "),t("code",[e._v("ErrorEvent")]),e._v(" is fired. The interface contains three useful properties for figuring out what went wrong:\n就像任何JS代码那样，你可以在你的Worker中处理所有的异常。如果当worker执行时发生了异常，"),t("code",[e._v("ErrorEvent")]),e._v(" 会被触发。这个接口包含三个有用的属性来指出异常的信息：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("filename")]),e._v(" - 发生错误的脚本名")]),e._v(" "),t("li",[t("strong",[e._v("lineno")]),e._v(" - 错误发生的位置")]),e._v(" "),t("li",[t("strong",[e._v("message")]),e._v(" - 错误信息的描述")])]),e._v(" "),t("p",[e._v("举个栗子:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function onError(e) {\n  console.log('Line: ' + e.lineno);\n  console.log('In: ' + e.filename);\n  console.log('Message: ' + e.message);\n}\n\nvar worker = new Worker('workerWithError.js');\nworker.addEventListener('error', onError, false);\nworker.postMessage(); // Start worker without a message.\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('message', function(e) {\n  postMessage(x * 2); // Intentional error. 'x' is not defined.\n};\n")])])]),t("p",[e._v("这里我们创建了一个worker然后开始监听"),t("code",[e._v("error")]),e._v("事件")]),e._v(" "),t("p",[e._v("worker (在 "),t("code",[e._v("workerWithError.js")]),e._v("中) 内部我们创建了一个内部异常---让"),t("code",[e._v("X")]),e._v("加2，但是"),t("code",[e._v("X")]),e._v("是未定义的。这个异常传递到初始化它的脚本，然后"),t("code",[e._v("onError")]),e._v("被触发了。")]),e._v(" "),t("h2",{attrs:{id:"使用-web-workers的绝佳场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-web-workers的绝佳场景"}},[e._v("#")]),e._v(" 使用 Web Workers的绝佳场景")]),e._v(" "),t("p",[e._v("我们已经讨论了Worker的优势和劣势，来看看有哪些适合它的场景")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("** 光线追踪**: 光线追踪是一种渲染技术，将跟踪的光线路径作为纹理生成图像。光线追踪是一个非常重的CPU密集型计算，需要模拟一些效果，像反射，折射，材质等等。所有这些计算逻辑需要被添加到Worker，以避免UI线程的阻塞。更棒的是，你可以在几个worker之间很随意的切割图像渲染（可以利用多个CPU）。这里是一个简单的例子\n— "),t("a",{attrs:{href:"https://nerget.com/rayjs-mt/rayjs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nerget.com/rayjs-mt/rayjs.html"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("加密:")]),e._v(" 端到端的加密越来越流行了，因为个人信息和敏感信息的要求越来越高。加密是相当耗时的，尤其是如果加密的数据量很大（比如，发往服务器前加密数据）。这是使用worker的绝佳场景，因为它不需要访问DOM。一旦进入worker，它对用户是无感的，也不会影响用户体验。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("预加载数据:")]),e._v(" 为了优化你的代码，提升加载事件，你可以使用worker去提前加载和存储数据，这样你可以在需要的时候使用它们。这种场景下，Worker的表现是非常棒的。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("渐进式网络应用:")]),e._v("  即使网络不稳定，这些应用也可以很快加载。也就是说数据需要被存储在浏览器本地。这里就需要"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexDB"),t("OutboundLink")],1),e._v("和一些类似的API了。这都是客户端存储需要的。为了不阻塞UI，这些东西都要放在Worker中执行。当使用 IndexDB的时候，可以不使用 workers 而使用其异步接口，但是之前它也含有同步接口（可能会再次引入 ），这时候就必须在 workers 中使用 IndexDB。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("拼写检查:")]),e._v("\n一个常见的拼写检查是这么工作的---程序读取带着正确拼写的字典文件。这个字典被转换长一个搜查树好让文本搜索更有效，当cheker提供了一个单词，程序会检查它是否在树中。如果不在，则会通过提供替代的字符为用户提供替代的拼写，并检查它是否是用户想写的。这个过程可以轻松的转给Worker来做，这样当用户输入任何单词或者句子，都不会阻塞UI，同时执行所有的搜索和拼写建议。")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);