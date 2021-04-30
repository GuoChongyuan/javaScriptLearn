// 实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。
// Node默认给你准备了一个空对象{}，这样你可以直接往里面加东西
/*
(function (name) {
    // 读取的hello.js代码:
    var s = 'Hello';
 //   var name = 'world';

    console.log(s + ' ' + name + '!');
    // hello.js代码结束
})("names");*/

var module = {
    id :"hello",
    exports:{}
};

var load = function (module) {
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = greet;
    return module.exports;
}


var exported = load(module);

exported("test")
