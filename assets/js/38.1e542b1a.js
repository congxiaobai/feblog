(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{371:function(e,r,t){"use strict";t.r(r);var v=t(45),a=Object(v.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("你可能已经知道渐进式应用逐渐流行，因为它旨在创造拥有更加流畅的用户体验的网络应用和创建类 App 的原生应用体验而非浏览器端那样的外观和体验。")]),e._v(" "),t("p",[e._v("最主要的一个需求是它在网络和加载方面非常稳定，它可以在网络较差甚至不存在的条件下使用。")]),e._v(" "),t("p",[e._v("这一章节，我们要深入讨论一下Service Workers：他们的功能是什么样子的，以及我们需要关注点什么。\n在最后，我们介绍一些Service Workers独一无二的优势，以及我们使用它的一些经验。\n为便于写作，下面我们将用SerWorker来替代Service Workers。")]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("p",[e._v("如果想了解SerWorker的所有细节，可以先从我们上一章博客开始。\nSerWorker只是Web Worker中的一类，更多细节看"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shared Worker"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("SerWorker在我们自己的全局脚本上下文中运行")]),e._v(" "),t("li",[e._v("不能关联到一个具体的web页面")]),e._v(" "),t("li",[e._v("不能访问 DOM")])]),e._v(" "),t("p",[e._v("SerWorker API 这么令人振奋的一个主要院院士，让你的应用支持离线使用，让开发者能够完全控制网络应用的行为")]),e._v(" "),t("h2",{attrs:{id:"serworker的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serworker的生命周期"}},[e._v("#")]),e._v(" SerWorker的生命周期")]),e._v(" "),t("p",[e._v("SerWorker 是跟你的网络页面完全独立的，它包含了以下几个阶段")]),e._v(" "),t("ul",[t("li",[e._v("下载")]),e._v(" "),t("li",[e._v("安装")]),e._v(" "),t("li",[e._v("激活")])]),e._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),t("p",[e._v("This is when the browser downloads the "),t("code",[e._v(".js")]),e._v(" file which contains the Service Worker.\n这里浏览器下载包含SerWorker的"),t("code",[e._v(".js")]),e._v(" 文件的时候")]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("安装一个SerWorker到你的app，你需要在你的JS代码中先注册。当一个SerWorker注册完成了，通知浏览器在后台启动一个SerWorker安装步骤。")]),e._v(" "),t("p",[e._v("By registering the Service Worker, you tell the browser where your Service Worker JavaScript file lives. Let’s look at the following code:\n通过注册SerWorker，你告知浏览器，你的JS文件所在的位置，看一下代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('/sw.js').then(function(registration) {\n      // 注册成功\n      console.log('ServiceWorker registration successful');\n    }, function(err) {\n      // 注册失败\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n")])])]),t("p",[e._v("代码检查了当前环境是否支持SerWorker API。如果支持，就注册 "),t("code",[e._v("/sw.js")]),e._v(" SerWorker")]),e._v(" "),t("p",[e._v("可以在每次页面加载的时候，可以调用 "),t("code",[e._v("register()")]),e._v(" --浏览器将会指出SerWorker是否已经注册了，然后会恰当的处理它。")]),e._v(" "),t("p",[t("code",[e._v("register()")]),e._v("函数的一个重要细节是SerWorker文件的位置。在这个例子中，你可以看到SerWorker文件是在服务器的根目录之下。这意味着SerWorker的作用范围是整个源。换句话说，这个SerWorker将接受这个域名下的所有"),t("code",[e._v("fetch")]),e._v(" 事件（稍后我们讨论）。如果我们注册在"),t("code",[e._v("/example/sw.js")]),e._v("中注册了SerWorker，你将会看到以"),t("code",[e._v("/example/")]),e._v("开头的URL所有的"),t("code",[e._v("fetch")]),e._v(" 事件（比如"),t("code",[e._v("/example/page1/")]),e._v(", "),t("code",[e._v("/example/page2/")]),e._v("）")]),e._v(" "),t("p",[e._v("在安装阶段，最好去加载和缓存一些静态资源。一旦资源成功缓存，SerWoker就完成了安装。如果没有成功，将会重试一次。一旦安装成功，就知道了静态资源已经在缓存中了。")]),e._v(" "),t("p",[e._v("这就是加载之后需要注册的原因。如果不是必须，但是非常推荐。")]),e._v(" "),t("p",[e._v("为什么呢？假如用户第一次访问你的app。此时没有任何的SerWorker，浏览器是无法提前知道是否有SerWorker需要安装。如果进行安装，则浏览器将会为增加的线程开辟额外的 CPU 和内存，而这些资源原本是用来渲染网页的。")]),e._v(" "),t("p",[e._v("底线是，如果你只是在页面中安装一个SerWokrt，就可能有一个延迟加载的风险，以及重绘的问题---不能够让用户尽快地访问网页。")]),e._v(" "),t("p",[e._v("注意这个在页面初次访问的时候是很重要的。随后的访问，不会收到SerWoker的影响。一旦一个SerWorker 在第一次访问时激活了，它可以为后面的访问处理加载/缓存事件。这是正确的，Service Worker 需要加载好以处理有限的网络带宽。")]),e._v(" "),t("h2",{attrs:{id:"激活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激活"}},[e._v("#")]),e._v(" 激活")]),e._v(" "),t("p",[e._v("SerWoker安装之后，下一步就是激活了。这一步是管理之前缓存的巨大机会。")]),e._v(" "),t("p",[e._v("一旦激活，这个SerWorker会控制作用域内所有页面。 首次注册SerWorker的页面将不会被控制，知道它再次加载。一旦SerWorker被控制，将会变为以下状态之一")]),e._v(" "),t("ul",[t("li",[e._v("处理来自页面的网络或者消息请求所触发的 fetch 及 message 事件")]),e._v(" "),t("li",[e._v("中断，为了节约内存")])]),e._v(" "),t("p",[e._v("看一下它的生命周期:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b64ef16cdbf4d36b0a6fa0fe74485db~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"处理-service-worker-内部的安装过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理-service-worker-内部的安装过程"}},[e._v("#")]),e._v(" 处理 Service Worker 内部的安装过程")]),e._v(" "),t("p",[e._v("页面处理完注册流程，SerWorker脚本内部发生了什么呢？它监听 Service Worker 实例的 "),t("code",[e._v("install")]),e._v(" 事件。")]),e._v(" "),t("p",[e._v("Those are the steps that need to be taken when the "),t("code",[e._v("install")]),e._v(" event is handled:\n处理"),t("code",[e._v("install")]),e._v(" 事件时需要做以下几步")]),e._v(" "),t("ul",[t("li",[e._v("打开缓存")]),e._v(" "),t("li",[e._v("缓存我们的文件")]),e._v(" "),t("li",[e._v("确认是否所有需要的资源已经缓存了")])]),e._v(" "),t("p",[e._v("看一个简单的例子，Service Worker内部如何安装的:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var CACHE_NAME = 'my-web-app-cache';\nvar urlsToCache = [\n  '/',\n  '/styles/main.css',\n  '/scripts/app.js',\n  '/scripts/lib.js'\n];\n\nself.addEventListener('install', function(event) {\n  // event.waitUntil 使用 promise 来获得安装时长及安装是否失败\n  event.waitUntil(\n    caches.open(CACHE_NAME)\n      .then(function(cache) {\n        console.log('Opened cache');\n        return cache.addAll(urlsToCache);\n      })\n  );\n});\n")])])]),t("p",[e._v("如果所有的文件已经成功缓存，然后SerWoker将会被安装。如果任意文件没有下载成功，安装步骤都会失败。所以要小心防止你的文件。")]),e._v(" "),t("p",[e._v("处理 "),t("code",[e._v("install")]),e._v(" 事件是可选的，如果你在这一步没什么可做的就可以不处理它。")]),e._v(" "),t("h2",{attrs:{id:"运行时缓存请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时缓存请求"}},[e._v("#")]),e._v(" 运行时缓存请求")]),e._v(" "),t("p",[e._v("这部分是干货了。在这里，你将会看到如何劫持请求，如何返回已创建的缓存。")]),e._v(" "),t("p",[e._v("SerWorker安装之后，用户导航到另一个页面或者刷新了当前页面，SerWorker将会接受fetch事件。这里有一个例子演示了如何返回缓存的静态资源或执行一个新的请求并缓存返回结果的过程的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('fetch', function(event) {\n  event.respondWith(\n    // 该方法查询请求然后返回 Service Worker 创建的任何缓存数据。\n    caches.match(event.request)\n      .then(function(response) {\n        // 若有缓存，则返回\n        if (response) {\n          return response;\n        }\n\n        // 复制请求。请求是一个流且只能被使用一次。因为之前已经通过缓存使用过一次了，所以为了在浏览器中使用 fetch，需要复制下该请求。\n        var fetchRequest = event.request.clone();\n        \n        // 没有找到缓存。所以我们需要执行 fetch 以发起请求并返回请求数据。\n        return fetch(fetchRequest).then(\n          function(response) {\n            // 检测返回数据是否有效\n            if(!response || response.status !== 200 || response.type !== 'basic') {\n              return response;\n            }\n\n            // 复制返回数据，因为它也是流。因为我们想要浏览器和缓存一样使用返回数据，所以必须复制它。这样就有两个流\n            var responseToCache = response.clone();\n\n            caches.open(CACHE_NAME)\n              .then(function(cache) {\n                // 把请求添加到缓存中以备之后的查询用\n                cache.put(event.request, responseToCache);\n              });\n\n            return response;\n          }\n        );\n      })\n    );\n});\n")])])]),t("p",[e._v("看看里面发生了什么:")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("event.respondWith()")]),e._v(" will determine how we’ll respond to the "),t("code",[e._v("fetch")]),e._v(" event. We pass a promise from "),t("code",[e._v("caches.match()")]),e._v(" which looks at the request and finds if there are any cached results from any of the caches that have been created.")]),e._v(" "),t("li",[t("code",[e._v("event.respondWith()")]),e._v("会决定如何响应"),t("code",[e._v("fetch")]),e._v("事件。"),t("code",[e._v("caches.match()")]),e._v(" 查询请求然后返回之前创建的缓存中的任意缓存数据并返回 promise。")]),e._v(" "),t("li",[e._v("如果有缓存，响应就会恢复")]),e._v(" "),t("li",[e._v("否则，执行 "),t("code",[e._v("fetch")])]),e._v(" "),t("li",[e._v("检查状态码是否是"),t("code",[e._v("200")]),e._v("。同时检查响应类型是否为 "),t("strong",[e._v("basic")]),e._v("，即检查请求是否同域 在这个案例中，请求第三方资源是不会被缓存的。")]),e._v(" "),t("li",[e._v("响应内容被添加到缓存中。")])]),e._v(" "),t("p",[e._v("请求和回应需要被克隆，因为他们是流。这个流的主体只可以被用一次。由于缓存和浏览器都需要使用它们，所以必须进行复制。")]),e._v(" "),t("h2",{attrs:{id:"更新service-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新service-worker"}},[e._v("#")]),e._v(" 更新Service Worker")]),e._v(" "),t("p",[e._v("用户访问你的app时，浏览器会尝试重新下载包含SerWorker代码的"),t("code",[e._v(".js")]),e._v("文件---这会在后台执行。")]),e._v(" "),t("p",[e._v("下载的文件跟当前SerWorker文件对比，即使仅仅有一个个字符的不同，浏览器将会认为文件已经改变，然后就启动一个新的SerWorker.")]),e._v(" "),t("p",[e._v("新的SerWoker将会启动，然后会触发安装事件。在这个时候，旧的SerWorker依然控制着app的页面，新的SerWorker将进入一个"),t("code",[e._v("waiting")]),e._v("状态。")]),e._v(" "),t("p",[e._v("一旦当前打开的页面被关闭了，旧的SerWoker将会被浏览器傻屌，新安装的SerWoker将取得完全的控制权。这时它的激活事件将会被触发。")]),e._v(" "),t("p",[e._v("为什么这些都是必要的？这是为了避免在不同tab中同时运行不同版本的的app所造成的问题－可能会产生新的 bug（比如当在浏览器中本地存储数据的时候却拥有不同的数据库结构）。")]),e._v(" "),t("h2",{attrs:{id:"删除缓存数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除缓存数据"}},[e._v("#")]),e._v(" 删除缓存数据")]),e._v(" "),t("p",[t("code",[e._v("activate")]),e._v("回调中最常见的一步是缓存管理。如果你打算清除所有的安装步骤旧缓存，你就可能需要走这一步,旧的SerWorker将会突然失去从缓存中户获取文件的能力。")]),e._v(" "),t("p",[e._v("Here is an example how you can delete some files from the cache that are not whitelisted (in this case, having "),t("code",[e._v("page-1")]),e._v("or "),t("code",[e._v("page-2")]),e._v(" under their names):\n这里有一个例子，如何删除缓存中白名单之外的文件（该情况下，以 "),t("code",[e._v("page-1")]),e._v(" 或者 "),t("code",[e._v("page-2")]),e._v(" 来进行命名）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('activate', function(event) {\n\n  var cacheWhitelist = ['page-1', 'page-2'];\n\n  event.waitUntil(\n    // 获得缓存中所有键\n    caches.keys().then(function(cacheNames) {\n      return Promise.all(\n        // 遍历所有的缓存文件\n        cacheNames.map(function(cacheName) {\n          // 若缓存文件不在白名单中，删除之\n          if (cacheWhitelist.indexOf(cacheName) === -1) {\n            return caches.delete(cacheName);\n          }\n        })\n      );\n    })\n  );\n});\n")])])]),t("h2",{attrs:{id:"https-要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-要求"}},[e._v("#")]),e._v(" HTTPS 要求")]),e._v(" "),t("p",[e._v("构建你的app时，你可以通过localhost使用SerWorker，但是一旦你发布了产品，就需要使用HTTPS（这也是使用HTTPS的最后原因啦)。\n可以利用 Service Worker劫持网络连接和伪造响应数据。如果不使用 HTTPS，网络应用容易遭受"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("中间人"),t("OutboundLink")],1),e._v(" 攻击。")]),e._v(" "),t("p",[e._v("为了保证安全，必须通过 HTTPS 在页面上注册 Service Workers，这样就可以保证浏览器接收到的 Service Worker 没有在传输过程中被篡改")]),e._v(" "),t("h2",{attrs:{id:"browser支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#browser支持"}},[e._v("#")]),e._v(" Browser支持")]),e._v(" "),t("p",[e._v("浏览器支持已经越来也好了:\n"),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52975fdbbd094cbbbcd9de14f8350c39~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n你可以跟踪浏览器支持情况— "),t("a",{attrs:{href:"https://jakearchibald.github.io/isserviceworkerready/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jakearchibald.github.io/isserviceworkerready/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"service-workers-提供了更多的功能的可能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-workers-提供了更多的功能的可能"}},[e._v("#")]),e._v(" ## Service Workers 提供了更多的功能的可能")]),e._v(" "),t("p",[e._v("Service Worker 提供了一些独一无二的特性：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("推送通知")]),e._v(" — 允许用户选择定时接收网络应用的推送更新")]),e._v(" "),t("li",[t("strong",[e._v("后台同步")]),e._v(" — 允许延迟操作直到网络连接稳定之后。这样就可以保证用户即时发送数据。")]),e._v(" "),t("li",[t("strong",[e._v("定期同步（以后支持）")]),e._v("  — 提供了管理进行定期后台数据同步的功能")]),e._v(" "),t("li",[t("strong",[e._v("Geofencing（以后支持）")]),e._v("  — 可以自定义参数，也即 "),t("strong",[e._v("geofences")]),e._v(" ，该参数包含着用户所感兴趣的地区。当设备穿过某片地理围栏的时候会收到通知，这就能够让你基于用户的地理位置来提供有用的用户体验")])]),e._v(" "),t("p",[e._v("这里提到的每个功能将会该系列之后的文章中进行详细阐述。")])])}),[],!1,null,null,null);r.default=a.exports}}]);