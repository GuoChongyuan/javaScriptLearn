/*
js的基本语法
    1. 数据类型和变量
    1.1 使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突
        为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。
        启用strict模式的方法是在JavaScript代码的第一行写上：'use strict';
    2. 模板字符串
        如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量
        JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串

    3. 数组
        大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

    4. 对象
        JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。
        JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。注意，最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错。

   5. 函数定义和调用
       JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array
       rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
       如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。
       由于JavaScript引擎在行末自动添加分号的机制,return可能会提前返回，导致后边的代码走不到
       JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
       不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性
       减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中，为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
       对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的
       用一个that变量首先捕获this,可以解决this只能指向当前对象的坑
       要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数，call()把参数按顺序传入
       JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数

   6. 高阶函数
      高阶函数主要主要是由于函数也能作为参数而搞出来的，所以这里可以直接使用匿名函数类进行表达
      重点 - lambda表达式
      高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用

      闭包的作用：在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量,换句话说，闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
      返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量
      如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变

      js中所谓的箭头函数就是使用lambda的形式进行表述，所以一定要学lambda表达式的写法，这样后边使用起来就会方便很多

      generator函数：
      因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能
      generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。这个好处要等到后面学了AJAX以后才能体会到。

  7. RegExp
    JavaScript有两种方式创建一个正则表达式：第一种方式是直接通过/正则表达式/写出来，第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象。

  8. 面向对象对象编程
    JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。
    xiaoming.__proto__ = Student，把xiaoming的原型指向了对象Student，看上去xiaoming仿佛是从Student继承下来的
    JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已
    请注意，上述代码仅用于演示目的。在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__。
    Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有

    当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined

    构造函数：在JavaScript中，可以用关键字new来调用这个函数，并返回一个对象
    注意，如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this;

    如果一个函数被定义为用于创建对象的构造函数，但是调用时忘记了写new怎么办？
    在strict模式下，this.name = name将报错，因为this绑定为undefined，在非strict模式下，this.name = name不报错，因为this绑定为window，于是无意间创建了全局变量name，并且返回undefined，这个结果更糟糕。
    所以，调用构造函数千万不要忘记写new。为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，而普通函数首字母应当小写，这样，一些语法检查工具如jslint将可以帮你检测到漏写的new

    原型继承：https://www.liaoxuefeng.com/wiki/1022910821149312/1023021997355072(本质还是new出来的对象指向原型对象的property属性)

    class继承

  9. 操作表单
    获得了一个<input>节点的引用，就可以直接调用value获得对应的用户输入值
    对于单选框和复选框，value属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用checked判断
    <form id="test-form" onsubmit="return checkForm()"> checkForm中可以写代码进行提交之前的校验
    没有name属性的<input>的数据不会被提交

    在HTML表单中，可以上传文件的唯一控件就是<input type="file">。
    注意：当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。
    出于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，用JavaScript对<input type="file">的value赋值是没有任何效果的。当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径


  10.Ajax - 异步请求数据的web开发技术，Ajax就是让浏览器当主线程完成后去干别的事情,比如发送请求,加载接口数据等等（https://www.cnblogs.com/qisexin/p/13431689.html）
    AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。
    异步操作只是手动的实现改变函数的调用顺序。不会进入任务队列。
    常见的异步操作是回调函数/事件监听模式/发布订阅模式；
    异步操作又可以分为串行异步/并行异步/串并行结合异步；
    http://c.biancheng.net/js/ajax/
    在JavaScript的世界中，所有代码都是单线程执行的。由于这个“缺陷”，导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行
    组合使用Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。

  11. jquery
    jQuery这么流行，肯定是因为它解决了一些很重要的问题。实际上，jQuery能帮我们干这些事情：
    消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；
    简洁的操作DOM的方法：写$('#test')肯定比document.getElementById('test')来得简洁；
    轻松实现动画、修改CSS等各种操作。
    jQuery的理念“Write Less, Do More“，让你写更少的代码，完成更多的工作！

    $本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。
    注意，你看到的$函数名可能不是jQuery(selector, context)，因为很多JavaScript压缩工具可以对函数名和参数改名，所以压缩过的jQuery源码$函数可能变成a(b, c)。

    选择器是jQuery的核心。一个选择器写出来类似$('#dom-id')。
    jQuery的选择器就是帮助我们快速定位到一个或多个DOM节点。
    多项选择器选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素
    子选择器$('parent>child')类似层级选择器，但是限定了层级关系必须是父子关系，就是<child>节点必须是<parent>节点的直属子节点
    过滤器
        $('ul.lang li:first-child'); // 仅选出JavaScript
        $('ul.lang li:last-child'); // 仅选出Lua
        $('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
        $('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
        $('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

    jQuery对象和DOM对象之间可以互相转化
        var div = $('#abc'); // jQuery对象
        var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
        var another = $(divDom); // 重新把DOM包装为jQuery对象

    jQuery对象的另一个好处是我们可以执行一个操作，作用在对应的一组DOM节点上。即使选择器没有返回任何DOM节点，调用jQuery对象的方法仍然不会报错,这意味着jQuery帮你免去了许多if语句

    https://www.liaoxuefeng.com/wiki/1022910821149312/1025427850131520




*/
/*'use strict'*/

function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            resolve('200 OK');
        }
        else {
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}
var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});


class Student1 {
    constructor(name) {
        this.name = name;
    }
}

//把JSON数据转换为串行字符串
//参数：data表示数组或对象类型的数据
//返回值：串行字符串
function JSONtoString (data) {
    var a = [];  //临时数组
    if (data.constructor == Array) {  //处理数组
        for (var i = 0; i < data.length; i ++) {
            a.push(data[i].name + "=" + encodeURIComponent(data[i].value));
        }
    } else {  //处理对象
        for (var i in data) {
            a.push(i + "=" + encodeURIComponent(data[i]));
        }
    }
    return a.join("&");  //把数组转换为串行字符串，并返回
}

let xiaohong = new Student1("xiaohong");

class StudentExt extends Student1{
    constructor(name,grade) {
        super(name);
        this.grade = grade;
    }
}

let xiaohong1 = new StudentExt("xiaohong1",90);

var Student = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

function createStudent(name) {
    var s= Object.create(Student);
    s.name = "test";
    return s;
}

Function.prototype

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};


var xiaoming1 = JSON.stringify(xiaoming,'',' ');
//console.log(xiaoming)

var obj = JSON.parse('{"name":"小明","age":14}',(key,value)=>{
    if(key == 'name'){
        return value + "同学";
    }else{
        return value;
    }
});

console.log(JSON.stringify(obj));

// generator函数
function fib(max) {
    var
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}
fib1 = fib(10)

function* fibf(max){
    let [a,b,n] = [0,1,0];
    while(n < max){
        yield a;
        [a,b] = [b,a+b];
        n++;
    }
    return;
}

var fib2 = fibf(5)

// 箭头函数
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = ()=>{new Date().getFullYear() - this.birth} // this指向window或undefined,这里的this已经被限定作用域了
        return fn();
    }
};

var arr5 = [10, 20, 1, 2];
var r5 = arr5.sort((x,y)=>{
    if(x>y){
        return 1;
    }else{
        return -1;
    }
})

// 闭包的一些case
function create_inc(start){
    var x = start || 0; // 在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量
    return {
        inc:function (){
            x = x + 1;
            return x;
        }
    }
}

var c1 = create_inc(10);
//console.log(c1.inc())
//console.log(c1.inc())
//console.log(c1.inc())

function count(){
    var arr=[];
    for (let i = 0; i <= 3; i++) {
        arr.push(function (){
            return i * i;
        });
    }

    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

// 高阶函数的一些case
var arr1 = [1, 2, 4, 5, 6, 9, 10, 15];
var r1 = arr1.filter(function (x){
    return x % 2 !=0;
})

var arr2 = ['apple', 'Strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r2 = arr2.filter(function (value,index,arr){
    return arr.indexOf(value) === index;
})

var arr3 = [10, 20, 1, 2];
r3 = arr3.sort(function (x,y){
    if(x > y){
        return 1;
    }else{
        return -1;
    }
})

var r4 = arr2.every(function (value) {
    return value.toLowerCase() === value;
})

arr2.forEach(function (value){
   // console.log(value)
})

// js基础学习

var a=[1,2,3]
var b = new Array(1,2,3)

var person={
    "name":"person name",
    "sex":"男"
}


var name = '小明';
var age = 20;
var arr = ['Bart', 'Lisa', 'Adam',"test","test1"];
for (var key of arr){
   // console.log(key)
}


function abs(x) {
    if(x >= 0){
        return x + arguments[1];
    }else{
        return -x;
    }
}

var absRes = abs(10,1)

var person = {
    name1: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// 把passport属性赋值给变量id:
let {name1, passport:id} = person;


var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var t = arr.map(pow)

var m = arr.reduce(function (x, y) {
    return x * 10 + y ;
})
