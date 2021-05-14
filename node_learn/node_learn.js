/*
node js
    1. node运行的两种模式
    直接输入node进入交互模式，相当于启动了Node解释器，但是等待你一行一行地输入源代码，每输入一行就执行一行。
    直接运行node hello.js文件相当于启动了Node解释器，然后一次性把hello.js文件的源代码给执行了，你是没有机会以交互的方式输入源代码的。

    2.模块原理
    JavaScript语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名
    实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。

    3.基本模块
    因为Node.js是运行在服务区端的JavaScript环境
    服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，而且，服务器程序必须能接收网络请求，读写文件，处理二进制内容
    所以，Node.js内置的常用模块就是为了实现基本的服务器功能。这些模块在浏览器环境中是无法被执行的，因为它们的底层代码是用C/C++在Node.js运行环境中实现的。
    JavaScript程序是由事件驱动执行的单线程模型，Node.js也不例外。Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了
    想要在下一次事件响应中执行代码，可以调用process.nextTick()
    响应exit事件，就可以在程序即将退出时执行某个回调函数

    由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
    服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。






*/
'use strict';
// 引入的模块作为变量保存在greet变量中
// 那greet变量到底是什么东西？其实变量greet就是在hello.js中我们用module.exports = greet;输出的greet函数。所以，main.js就成功地引用了hello.js模块中定义的greet()函数，接下来就可以直接使用它了。
// 在使用require()引入模块的时候，请注意模块的相对路径
// 如果只写模块名,则Node会依次在内置模块、全局模块和当前模块下查找
// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量
// 引入的对象具体是什么，取决于引入模块输出的对象
const jsdom = require('jsdom')
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window);

var log = global.console.log;
var require1 = require("./hello");

require1.greet("name")

log("测试完成")

/*$.get("http://wthrcdn.etouch.cn/weather_mini?city=%E5%8C%97%E4%BA%AC",function (data) {
    log("IO执行");
})
log("继续执行")*/

var fs = require('fs')

fs.readFile('node_learn/hello.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');

    console.log('Server is running at http://127.0.0.1:8080/');
});

// 让服务器监听8080端口:
server.listen(8080);

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


