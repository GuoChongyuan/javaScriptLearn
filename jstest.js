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


*/
/*'use strict'*/

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
