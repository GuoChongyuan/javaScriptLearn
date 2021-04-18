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

*/
/*'use strict'*/

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
    console.log(key)
}


function abs(x) {
    if(x >= 0){
        return x + arguments[1];
    }else{
        return -x;
    }
}

var absRes = abs(10,1)
console.log(absRes)

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
