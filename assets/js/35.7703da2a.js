(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{374:function(e,t,a){"use strict";a.r(t);var n=a(45),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("现在，我们将会深入通信协议的世界，绘制并讨论它们的特点和内部构造。然后简单比较一下 WebSockets 和 HTTP/2。")]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("因特网规范诞生已经很久了，如今越来越复杂，越来越臃肿但是具有动态UI，且极富表现性的APP逐渐称为主流了。\n一开始因特网并不支持这么复杂的APP。它只是一些HTML的文件集合，从一个链接到另一个而已，这里的一切大部分都是建立在HTTP规范的request/response 模式之上。用户点击一个页面，客户端就加载这个页面。\n大概2005年，AJAX被引入了。很多人开始探索客户端和服务端双向通信的可能性。不过，所有的 HTTP 链接是由客户端控制的，所以必须要用户进行操作或者定期轮询以从服务器加载数据新数据。")]),e._v(" "),a("h2",{attrs:{id:"让http可以双向通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#让http可以双向通信"}},[e._v("#")]),e._v(" 让HTTP可以双向通信")]),e._v(" "),a("p",[e._v('支持服务端单向给客户端发送信息的技术已经出现很久了。比如 "'),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Push_technology",target:"_blank",rel:"noopener noreferrer"}},[e._v("Push"),a("OutboundLink")],1),e._v('" 和 "'),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Comet_%28programming%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comet"),a("OutboundLink")],1),e._v('" 技术。')]),e._v(" "),a("p",[e._v("长轮询是服务端‘主动’向客户端发送数据的最常见的 hack 之一。"),a("br"),e._v("\n通过长轮询，客户端打开了一个到服务端的 HTTP ，并且保持它是open的，直到返回响应数据。当服务端有新数据需要发送时，它会把新数据作为响应发送给客户端。\n如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function poll(){\n   setTimeout(function(){\n      $.ajax({ \n        url: 'https://api.example.com/endpoint', \n        success: function(data) {\n          // Do something with `data`\n          // ...\n\n          //Setup the next poll recursively\n          poll();\n        }, \n        dataType: 'json'\n      });\n  }, 10000);\n})();\n")])])]),a("p",[e._v("这个调用还是比较常见的自执行调用，设置了10秒了计时器，然后在异步的Ajax请求的回调中再次调用了'ajax'.\n其他技术包括了[Flash]或者XHR的多路请求，以及[htmlfiles]等。\n这些方案有同样的问题，HTTP负载太多，这就不太适用低延迟的WEB 应用。比如多玩家的第一人称射击游戏，这种游戏需要一个实时的通信。")]),e._v(" "),a("h2",{attrs:{id:"websocket简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket简介"}},[e._v("#")]),e._v(" WebSocket简介")]),e._v(" "),a("p",[e._v("WebSocket规则定义了一个API，在服务端和浏览器之间建立一个“socket” 连接。“socket” 是一个持久连接，在任意时刻，服务器和浏览器都可以互相给对方发信息。")]),e._v(" "),a("p",[e._v("通过WebSocket的 ‘握手’过程，客户端可以建立一个Websocket连接。\n这个流程开始时，客户端发送一个常规的HTTP请求到服务端。但是，这个请求的请求头包含了一个'Upgrade'的头部信息，这个头部信息告知服务器，客户端希望建立一个WebSocket连接。\n举个栗子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Create a new WebSocket with an encrypted connection.\nvar socket = new WebSocket('ws://websocket.example.com');\n")])])]),a("blockquote",[a("p",[a("em",[e._v("WebSocket URLs 使用")]),e._v("*"),a("code",[e._v("ws")]),e._v("** 规范. 如果使用安全连接，可以使用 "),a("strong",[a("code",[e._v("wss")])]),e._v("  就像使用 "),a("strong",[a("code",[e._v("HTTPS")])]),e._v(".*")])]),e._v(" "),a("p",[e._v("这个栗子只是启动了一个打开WebSocket的流程，这个WebScoket连接到"),a("code",[e._v("websocket.example.com.")])]),e._v(" "),a("p",[e._v("该请求的请求头大概是这样")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET ws://websocket.example.com/ HTTP/1.1\\\nOrigin: http://example.com\\\nConnection: Upgrade\\\nHost: websocket.example.com\\\nUpgrade: websocket\n")])])]),a("p",[e._v("如果服务器支持一个WebSocket协议，它将同意升级，然后通过回应中的"),a("code",[e._v("Upgrade")]),e._v("头信息来进行通信。")]),e._v(" "),a("p",[e._v("我们看看Node.JS怎么实现这个:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// We'll be using the https://github.com/theturtle32/WebSocket-Node\n// WebSocket 实现\nvar WebSocketServer = require('websocket').server;\nvar http = require('http');\n\nvar server = http.createServer(function(request, response) {\n  // process HTTP request. \n});\nserver.listen(1337, function() { });\n\n// 创建一个服务器\nwsServer = new WebSocketServer({\n  httpServer: server\n});\n\n// WebSocket 服务\nwsServer.on('request', function(request) {\n  var connection = request.accept(null, request.origin);\n\n  // This is the most important callback for us, we'll handle\n  // all messages from users here.\n  connection.on('message', function(message) {\n      // 处理 WebSocket 信息\n  });\n\n  connection.on('close', function(connection) {\n    // 关闭连接\n  });\n});\n")])])]),a("p",[e._v("一旦连接建立，这个服务端升级回应")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("HTTP/1.1 101 Switching Protocols\\\nDate: Wed, 25 Oct 2017 10:07:34 GMT\\\nConnection: Upgrade\\\nUpgrade: WebSocket\n")])])]),a("p",[e._v("一旦连接建立，客户端的WebSocket实例的"),a("code",[e._v("open")]),e._v("事件将会被触发")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var socket = new WebSocket('ws://websocket.example.com');\n\n// Show a connected message when the WebSocket is opened.\nsocket.onopen = function(event) {\n  console.log('WebSocket is connected.');\n};\n")])])]),a("p",[e._v("现在握手结束了，之前初始化的HTTP连接被一个同样使用TCP/IP协议的WebSocket连接替代了。现在，无论哪一方都可以在任意时间点给对方发送数据了。"),a("br"),e._v("\n使用WebSokcet,只要你愿意，你可以传递任意大的数据，不用担心资源像传统的HTTP那样过载。   WebSokcet是通过"),a("strong",[e._v("message")]),e._v("来进行传递数据的，每一个message中包含一个或多个的"),a("strong",[e._v("frames")]),e._v(",frame中包含着你的数据（既载荷）。为了确定message可以正确的重建，每一个frame到达客户端时，都加了关于载荷的4-12字节的前缀数据。使用这种基于frame的信息系统，在传递时有效较少了无效荷载的数量，因此减少了很多延迟。")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": 只有所有的frame被接收到，并且源信息已经被重建了，客户端才会收到新消息的通知。")]),e._v(" "),a("h2",{attrs:{id:"websocket-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-url"}},[e._v("#")]),e._v(" WebSocket URL")]),e._v(" "),a("p",[e._v("我们简单提起了WebSocket的URL规范，WebSocket引入了两种规范："),a("code",[e._v("ws://")]),e._v(" 和 "),a("code",[e._v("wss://")])]),e._v(" "),a("p",[e._v("URL 有特地的语法，WebSocket URL明确不支持锚点语法（比如："),a("code",[e._v("#sample_anchor")]),e._v("）")]),e._v(" "),a("p",[e._v("WebSocket 和 HTTP 风格的地址使用相同的地址规则。"),a("code",[e._v("ws")]),e._v(" 未加密且默认是 80 端口，而 "),a("code",[e._v("wss")]),e._v(" 要求 TSL 加密且默认 443 端口。")]),e._v(" "),a("h2",{attrs:{id:"frame协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frame协议"}},[e._v("#")]),e._v(" frame协议")]),e._v(" "),a("p",[e._v("深入了解一下frame协议， 这是"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6455#page-27",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC"),a("OutboundLink")],1),e._v("提供的:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("      0                   1                   2                   3\n      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n     +-+-+-+-+-------+-+-------------+-------------------------------+\n     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |\n     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |\n     |N|V|V|V|       |S|             |   (if payload len==126/127)   |\n     | |1|2|3|       |K|             |                               |\n     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +\n     |     Extended payload length continued, if payload len == 127  |\n     + - - - - - - - - - - - - - - - +-------------------------------+\n     |                               |Masking-key, if MASK set to 1  |\n     +-------------------------------+-------------------------------+\n     | Masking-key (continued)       |          Payload Data         |\n     +-------------------------------- - - - - - - - - - - - - - - - +\n     :                     Payload Data continued ...                :\n     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +\n     |                     Payload Data continued ...                |\n     +---------------------------------------------------------------+\n")])])]),a("p",[e._v("由于 WebSocket 版本是由 RFC 所规定的，所以每个包前面只有一个头部信息。然而，这个头部信息相当的复杂。头部有这些信息：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fin")]),e._v(" ("),a("em",[e._v("1 位")]),e._v("):指示是否是组成信息的最后一帧。大多数时候，信息只有一帧所以该位通常有值。测试表明火狐的第二帧数据在 32K 之后。")]),e._v(" "),a("li",[a("code",[e._v("rsv1")]),e._v(", "),a("code",[e._v("rsv2")]),e._v(", "),a("code",[e._v("rsv3")]),e._v(" ("),a("em",[e._v("1位")]),e._v("): 除非使用协商重新定义了0的含义，否则此处必须是0，否则，接收端会中断连接。")]),e._v(" "),a("li",[a("code",[e._v("opcode")]),e._v(" ("),a("em",[e._v("4 位")]),e._v("): frames表示的内容，当前使用的这些\n"),a("code",[e._v("0x00")]),e._v(": 这个frame 前一帧的后续载荷\n"),a("code",[e._v("0x01")]),e._v(": 这个frame 包含text数据\n"),a("code",[e._v("0x02")]),e._v(": 这个frame 包含二进制数据\n"),a("code",[e._v("0x08")]),e._v(": 这个frame 结束连接\n"),a("code",[e._v("0x09")]),e._v(": 这个frame 是一个ping\n"),a("code",[e._v("0x0a")]),e._v(": 这个frame 是一个pong\n(如你所见，还有很多值没有使用，这些值在未来会被用起来).")]),e._v(" "),a("li",[a("code",[e._v("mask")]),e._v(" ("),a("em",[e._v("1 位")]),e._v("): 表示连接是否是遮罩的。客户端到服务端的每一个message "),a("em",[e._v("必须是遮罩的")]),e._v(" ，如果没有遮罩，根据规范会中断连接")]),e._v(" "),a("li",[a("code",[e._v("payload_len")]),e._v(" ("),a("em",[e._v("7 位")]),e._v("): 载荷的长度. WebSocket frame 有以下几中长度："),a("br"),e._v("\n0–125 表示载荷的长度"),a("br"),e._v("\n126 意思是接下来两位的值，是有效载荷的长度"),a("br"),e._v("\n127 意思是接下来的8位，是有效载荷的长度"),a("br"),e._v("\n所以有效载荷是3类~7位, 16位, 和 64位")]),e._v(" "),a("li",[a("code",[e._v("masking-key")]),e._v(" ("),a("em",[e._v("32 位")]),e._v("):所有从客户端发送到服务端的frames 被一个包含在frame中的32位值遮罩了。")]),e._v(" "),a("li",[a("code",[e._v("payload")]),e._v(": 被遮罩的真实的数据。它的长度是"),a("code",[e._v("payload_len")]),e._v("的长度。\n为什么WebSocket 是基于frame的而不是基于stream的？我也不清除，如果你知道的话一起讨论一下把。当然，这里有一个很好的"),a("a",{attrs:{href:"https://news.ycombinator.com/item?id=3377406",target:"_blank",rel:"noopener noreferrer"}},[e._v("博客"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"frame-上的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frame-上的数据"}},[e._v("#")]),e._v(" frame 上的数据")]),e._v(" "),a("p",[e._v("像上面提到的，数据额可以被放置到多个frame里。第一个frame中包含一个操作码，它表示传递的数据类型。这是很必要的，因为JS规范从诞生时就不支持二进制数据")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("0x01")]),e._v(" 表示utf-8编码的文本数据")]),e._v(" "),a("li",[a("code",[e._v("0x02")]),e._v(" 表示二进制数据。\n大多数人喜欢传递JSON，这种场景下大家倾向选择文本操作码。当你传递二进制数据，浏览器会将其指定为"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blob"),a("OutboundLink")],1),e._v(".\n举个栗子:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var socket = new WebSocket('ws://websocket.example.com');\nsocket.onopen = function(event) {\n  socket.send('Some message'); // Sends data to server.\n};\n")])])]),a("p",[e._v("当WebSocket接收到数据(客户端), 会触发一个"),a("code",[e._v("message")]),e._v(" 事件。这个事件包含了一个"),a("code",[e._v("data")]),e._v("属性，这个属性可以访问到message的内容。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Handle messages sent by the server.\nsocket.onmessage = function(event) {\n  var message = event.data;\n  console.log(message);\n};\n")])])]),a("p",[e._v("使用Chrome DevTools中的Network页面，你可以查看到WebSocket连接中每一个frame里面的数据。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95256f0e39394ba5b3154f6666d10277~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("h2",{attrs:{id:"frame化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frame化"}},[e._v("#")]),e._v(" frame化")]),e._v(" "),a("p",[e._v("荷载数据可以被切割到多个独立的frame中。接受的信息假设是被缓存起来的，直到"),a("code",[e._v("fin")]),e._v("位被设置。你可以传递一个“Hello World”在11个包里，没一个包有6 (头部长度) + 1 位。frame不允许去控制包的。但是协议希望你可以处理交错的受控的frame。这是因为TCP包是不按顺序达到的。")]),e._v(" "),a("p",[e._v("连接frame的逻辑大概如下：")]),e._v(" "),a("ul",[a("li",[e._v("接受第一个frame")]),e._v(" "),a("li",[e._v("记住操作码")]),e._v(" "),a("li",[e._v("当"),a("code",[e._v("fin")]),e._v("位有值时，将frame荷载连接到一起")]),e._v(" "),a("li",[e._v("断言每一个包的操作码是0")])]),e._v(" "),a("p",[e._v("frame化的主要目的是，当message启动时，允许发送大小未知的数据。通过frame化，服务端或者选择一个更合理的缓存池，当缓存满了，就往网络中写一个frame。frame化的另一个用途是多路复用。一逻辑信道上的大量数据占据整个输出通道是不合理的，所以多路复用需要自由的将数据分割成更小的frame，这样能更好的共享输出信道。")]),e._v(" "),a("h2",{attrs:{id:"什么是心跳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是心跳"}},[e._v("#")]),e._v(" 什么是心跳?")]),e._v(" "),a("p",[e._v("握手之后，客户端和服务端在任意时间都可以发送ping给对方。当ping被接受，接收方必须尽快回复一个pong。这就是心跳。你可以用它来确保客户端依然是连接的。")]),e._v(" "),a("p",[e._v("ping和pang都只是一个常规的frame，但是是一个受控的frame。ping的操作码是 "),a("code",[e._v("0x9")]),e._v("，pong的操作码是"),a("code",[e._v("0xA")]),e._v("。当你获得一个ping，回复一个和ping的荷载数据一抹一眼的pong（ping和pong的最大荷载长度是"),a("strong",[e._v("125")]),e._v("）。有时候你没发送ping，却收到了一个pong，这时候就无视这个pong。")]),e._v(" "),a("p",[e._v("心跳是很有用的。有很多服务器（像负载均衡）将会中断空闲的连接。另外，接收端是不可能知道远程端是否是关闭的。只有在下一次发送的时候，你才知道连接有问题了。")]),e._v(" "),a("h2",{attrs:{id:"异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[e._v("#")]),e._v(" 异常处理")]),e._v(" "),a("p",[e._v("You can handle any errors that occur by listening out for the "),a("code",[e._v("error")]),e._v(" event.\n通过监听"),a("code",[e._v("error")]),e._v(" 事件，处理任何异常。\n像这样:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var socket = new WebSocket('ws://websocket.example.com');\n\n// Handle any error that occurs.\nsocket.onerror = function(error) {\n  console.log('WebSocket Error: ' + error);\n};\n")])])]),a("h2",{attrs:{id:"关闭连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭连接"}},[e._v("#")]),e._v(" 关闭连接")]),e._v(" "),a("p",[e._v("客户端或者服务端发送一个包含"),a("code",[e._v("0x8")]),e._v("的操作码的受控frame，将会关闭连接。一旦接受这样一个frame，另一端发送一个关闭frame的回应。第一个端就关闭了连接。关闭连接之后，再接受的数据都会被放弃。")]),e._v(" "),a("p",[e._v("看一个初始化关闭客户端WebSocket的例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Close if the connection is open.\nif (socket.readyState === WebSocket.OPEN) {\n    socket.close();\n}\n")])])]),a("p",[e._v("添加一个"),a("code",[e._v("close")]),e._v("事件的监听，这样当请求关闭了，你可以执行一些清理的动作。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Do necessary clean up.\nsocket.onclose = function(event) {\n  console.log('Disconnected from WebSocket.');\n};\n")])])]),a("p",[e._v("若有必要，服务端也可以监听"),a("code",[e._v("close")]),e._v("事件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("connection.on('close', function(reasonCode, description) {\n    // The connection is getting closed.\n});\n")])])]),a("h2",{attrs:{id:"比较一下-websockets-and-http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较一下-websockets-and-http-2"}},[e._v("#")]),e._v(" 比较一下 WebSockets and HTTP/2")]),e._v(" "),a("p",[e._v("HTTP/2提供了很多功能，但是不能完全替代存在已久的push/streaming技术。\n首先要注意的是，HTTP/2 不能替代所有的HTTP。词汇，状态码，大部分的头部信息依然是保留的。HTTP/2只是提升了传输效率。\n比较一下HTTP/2 和WebSocket：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2852732deb24e50877db1714eb0ad25~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("p",[e._v("如上所见，HTTP/2 引入了 服务端推送，可以让服务端主动的给客户端缓存发送资源。但是，它不允许向客户端本身推送数据。服务端推送只能让浏览器处理，不能上升到代码中，这意味着没有api让应用去获取事件的通知。"),a("br"),e._v("\n这样SSE（ Server-Sent Events服务端发送事件）就很有用了。一旦客户端连接建立，SSE机制允许服务端异步的推送数据到客户端。只要一个数据片段是可用的，服务器就会去发送数据。这可以当成是一个单向的发布订阅模式。它也可以提供一名为个EventSource的标准的JS 客户端 API，EventSource作为H5的一部分，如今被大多数浏览器实现了，一些不支持的浏览器也可以使用polyfill来实现。")]),e._v(" "),a("p",[e._v("SSE基于HTTP，天然的适配HTTP/2，所以可以合并两者的优点：HTTP/2基于多路stream可以处理有效地传递层，SSE则提供了API给应用以便支持服务端推送。")]),e._v(" "),a("p",[e._v("为了完全理解流和多路复用是什么，我们首先看一下IETF定义：『流』即是在一个 HTTP/2 连接中，在客户端和服务端间进行交换传输的一个独立的双向帧序列。它的主要特点之一即单个的 "),a("em",[e._v("HTTP/2")]),e._v(" 连接可以包含多个并发打开的流，在每一终端交错传输来自多个流的frame。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b5fe0794b854eed97c59b02527151ca~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("p",[e._v("我们需要记住SSE是基于HTTP的。在HTTP/2的加持下，不仅可以多个SSE 流在一个TCP连接中交织，也可以合并多个SSE流（服务端往客户端推送)和客户端请求。现在，我们有了一个纯粹的HTTP双向连接，它有一些简单的API使得客户端代码可以注册监听服务端信息的推动。\n相比SSE跟WebSocket，缺乏双向能力，经常被视为缺陷。HTPP/2弥补了这一缺陷。这就让我们有机会坚持使用基于HTTP通信，而不是WebSocket，")]),e._v(" "),a("h2",{attrs:{id:"在websocket-和http-2中如何抉择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在websocket-和http-2中如何抉择"}},[e._v("#")]),e._v(" 在WebSocket 和HTTP/2中如何抉择")]),e._v(" "),a("p",[e._v("WebSocket当然会在HTTP/2 + SSE的主宰下存在，主要是因为整个技术已经被接受了,在一些特使的场景下，它还是具有比HTTP/2更大的优势，它可以用更小的负载（比如headers）去建立双向通信。")]),e._v(" "),a("p",[e._v("假如你想创建一个大型的多人在线游戏，就需要大量的数据在客户端和服务端传递，这种场景下，WebSocket表现更好。")]),e._v(" "),a("p",[e._v("无论何时，当你需要你一个真正的 "),a("strong",[e._v("低延迟")]),e._v("应用，或者接近实时通信的应用，可以使用WebSocket。谨记，需要重新考虑构建你的服务端应用的方式，把注意力转移到事件队列上。")]),e._v(" "),a("p",[e._v("如果你需要显示实时的市场新闻，市场数据，聊天应用等等，HTTP/2 + SSE 将会给你提供一个有效地双向通信通道，并且得到了HTTP带来的好处：")]),e._v(" "),a("ul",[a("li",[e._v("考虑到兼容问题时，WebSockets 就是问题来源，尤其是你要把HTTP连接的接口升级到一个与HTTP完全不想管的协议上。")]),e._v(" "),a("li",[e._v("伸缩性和安全性：Web 组件（防火墙，入侵检测，负载均衡）的构建，维护和HTTP配置都是要考虑的。大型/重要的应用更依赖于弹性的，安全的，可伸缩的环境。")])]),e._v(" "),a("p",[e._v("同样，要考虑浏览器对WebSocket的支持情况:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe31bcde98df426e8ab3a48a9acaa9f4~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\nHTTP/2的情况是这样的：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b51bf77b4c9d4b0e9e860b775692ed1a~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("ul",[a("li",[e._v("仅支持TLS-only")]),e._v(" "),a("li",[e._v("只在 Windows 10的IE 11 上部分支持")]),e._v(" "),a("li",[e._v("只在OSX 10.11+ 的Safari中支持")]),e._v(" "),a("li",[e._v("协商使用ALPN时，才支持（你的服务端需要明确支持)")])]),e._v(" "),a("p",[e._v("SSE 支持的更好一点:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c03629e54d1f4a989f343b0a9a6b0fef~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),e._v("\n只有 IE/Edge（新Edge采用了chromium内核，是支持的） 不支持。（Opera迷你既不支持SSE也不支持WebSockets）。我们需要一些精巧的polyfill让IE/Edge支持SSE")])])}),[],!1,null,null,null);t.default=s.exports}}]);