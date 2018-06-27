import React from 'react';
import { Highlighter } from '../../utils/highlighter';

import ListItem from '../../../base/listItem';
import PageTitle from '../../../base/pageTitle';
import WordsList from '../../../base/keywordsList';
import eventData from './data.json';

export default function TechEvent(props) {
  const data = eventData;
  const linkListItems = data.linkListItems.slice();

  return (
    <div className="tech tech-event">
      <header>
        <PageTitle title={data.pageTitle} />
        <WordsList words={data.keyWords} />
      </header>
      <article>
        <div className="object">
          <h2>函数为什么如此重要?</h2>
          <dl>
            <dd>
              编写平均水平的代码,还是编写忍者级别的代码,取决于是否这正了解JavaScript是一门函数式语言.编写代码的水平就取决于对这一点的认知
            </dd>
            <dd>JavaScript中的函数和其他语言中的函数不同:</dd>
            <dd>
              函数可以有属性,也可以有方法,可以分配给变量和属性,也有所有普通对象拥有的特性,他的超级特性是:可以被调用
            </dd>
            <dd>
              <Highlighter>
                {`
//声明
//作用域
//调用: 函数,方法,构造函数,apply & call,他们的主要区别是调用时的this值
//作为构造函数调用时,会发生如下"特殊行为":
//1. 创建一个新对象
//2. 将这个新对象作为this参数传给构造函数
//3. 如果没有显示返回值, 将返回新创建的对象
//一般情况下,构造器的目的是要创建一个新对象并对其进行设置,然后将其作为构造器的返回值返回.
//任何干扰这种意图的函数,都不适合作为构造器.
//参数: 除了箭头函数,所有函数都会被传递两个隐式参数:arguments, this
//类数组arguments与数组的转换
//this参数引用了与该函数调用进行隐式关联的一个对象,被称之为函数上下文(function context)
//函数上下文的概念来源于Java这样的面向对象语言,认为,this是方法声明所在的类的一个实例.
//但在JavaScript中,方法调用只是函数4种调用方式之一. this依赖于函数的调用方式,所以将this称为调用上下文(invocation context)更为清晰
//函数种类: 匿名,递归,箭头,自记忆函数
`}
              </Highlighter>
            </dd>
          </dl>

          <h2>递归函数(Recursion)</h2>
          <dl>
            <dt>递归的两条准则(criteria):</dt>
            <dd>1. a reference to self</dd>
            <dd>2. convergence(趋于) towards termination</dd>
            <dd className="notice">
              Note that a “recursive” function that doesn’t converge toward
              termination is better known as an infinite loop!
            </dd>
            <dt>递归的应用</dt>
            <dd>
              <Highlighter>
                {`
// 用递归实现'判断回文'
function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  return isPalindrome(text.substr(1,text.length - 2));
}

//递归实现'斐波那契列表'
function recurFib(n){
    if(n < 2){
        return n
    }else{
        //会重复计算部门元素
        return recurFib(n-1)+recurFib(n-2)
    }
}

// 递归实现'快速排序'
function quickSort(arr) {
  if(!arr.length) return [];
  let l = arr.length
  let lesserArr = []
  let greaterArr = []
  //基准点
  let pivot = arr[0]
  for(let i=1; i<l; i++){
    // (arr[i]>pivot?greaterArr:lesserArr).push(arr[i])
    if(arr[i]>pivot){
      greaterArr.push(arr[i])
    }else{
      lesserArr.push(arr[i])
    }
  }
  return quickSort(lesserArr).concat(pivot, quickSort(greaterArr))
}
                `}
              </Highlighter>
            </dd>
          </dl>

          <h2>内联函数(inline function)</h2>
          <dl>
            <dd>内联函数: 有函数名的作为callback声明和方法声明的函数.</dd>
            <dd>
              在浏览器中,为什么要将全局函数作为window的方法进行调用?不使用window的属性,我们没办法引用这些函数
            </dd>
            <dd>
              因为内联函数额名称只能在函数内部可见,和变量名称很像,
              他们的作用域仅限于声明他们的函数
            </dd>
            <dd>
              <Highlighter>
                {`
var ninja = {
  chirp: function(n) {
    return n > 1 ? ninja.chirp(n - 1) + "-chirp" : "chirp";
  }
};
var samurai = { chirp: ninja.chirp };
ninja = {};
//Uncaught TypeError: ninja.chirp is not a function
//在执行ninja.chirp(n - 1)时,ninja.chirp已经是undefined
console.log(samurai.chirp(3) == "chirp-chirp-chirp")
/*
  //改进1
  chirp: function (n) {
    //此方法还是会依赖本对象的方法名'chirp'
    return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
  }
  //改进2: 使用内联函数取名, 可以解决这些函数在递归引用方面的问题
  chirp: function signal(n) {
    return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
  }
*/
`}
              </Highlighter>
            </dd>
          </dl>

          <h2>回调</h2>
          <dl>
            <dd>
              当我们定义一个函数稍后执行时, 无论何时定义,
              在浏览器还是其他地方执行, 我们定义的就是所谓的回调(callback)
            </dd>
            <dd>
              该术语源于: 我们定义一个函数,
              以便其他一些代码在适当的时机回头再调用它.
            </dd>
          </dl>

          <h2>函数存储</h2>
          <dl>
            <dd className="notice">
              你知道函数可以有属性,但是你并不知道怎么利用这一特性!
            </dd>
            <dd>
              应用之一:
              事件回调管理,想一个集合(通常是一个对象),添加函数时,要确定哪些函数已经在集合中或不存在
            </dd>
            <dd>
              显而易见但天真的解决方法是,
              将所有的函数保存在一个数组里,然后遍历数组检查重复的函数.
              能做,当并不够好
            </dd>
            <dd>
              <Highlighter>
                {`
const store = {
  nextId: 1,
  cache: {},
  add(fn){
    if(!fn.id){
      //给函数添加'索引'
      fn.id = store.nextId++;
      // 储存函数并返回true,提高性能的同时也会牺牲掉内存
      return !!(store.cache[fn.id]=fn);
    }
  }
}
`}
              </Highlighter>
            </dd>
          </dl>
          <h2>自记忆函数(Self-memoizing)</h2>
          <dl>
            <dd>记住以前计算的值,避免已经执行过的复杂计算,以提高性能</dd>
            <dd>
              <Highlighter>
                {`
// 计算质数以及类似的高昂计算
function isPrime(value) {
  if (!isPrime.anwers) isPrime.answers = {};
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }
  var prime = value != 1; // 1 can never be prime
  for (var i = 2; i < value; i++) {
    if (value % i == 0) {
      prime = false;
      break;
    } 
  }
  return isPrime.answers[value] = prime;
}

// 计算质数的更灵活的实现:将储存与实现分离,哪怕isPrime是一个私有方法也能实现记忆
// 缺点: 函数必须通过memoized方法调用
Function.prototype.memoized = function(key){
  this._values = this._values || {};
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
};
function isPrime(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    } 
  }
  return prime;
}
assert(isPrime.memoized(5),"The function works; 5 is prime.");
assert(isPrime._values[5],"The answer has been cached.");

//缓存dom
function getElements(name) {
  if(!getElements.cache){
    getElements.cache = {};
  }
  //返回已经存储的值,或者存储后返回新值
  return getElements.cache[name] = getElements.cache[name] || document.getElementsByTagName(name)
}

//伪数组方法
var elems = {
  length: 0,
  add(elem){
    //or [].push.call(this, elem)
    //push方法是有意通用化的
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    Array.prototype.push.call(this, elem);
  },
  gather(id){
    this.add(document.getElementById(id));
  } 
};
elems.gather("first");
elems.gather("second");
`}
              </Highlighter>
            </dd>
          </dl>
          <h2>参数</h2>
          <dl>
            <dd>
              <Highlighter>
                {`
// 参数默认值
function p1(x=0,y=0){};
//函数并没有默认参数,解构对象提供了默认值
function p2({x,y=0}){};
//默认参数为{},并且解构对象有默认值
function foo({x, y = 5} = {}) {
  console.log(x, y);
}
//函数默认值为{ x: 0, y: 0 },解构对象无默认值
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
// 函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
  console.log(method);
}
//如果传入undefined，将触发该参数等于默认值，null则没有这个效果
function foo(x = 5, y = 6) {
  console.log(x, y);
}
// 5 null
foo(undefined, null)
//length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了
//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
(function (a) {}).length // 1
(function (a, b, c = 5) {}).length // 2
(function(...args) {}).length // 0
//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
(function (a, b = 1, c) {}).length // 1

// 暂时性死区: http://es6.ruanyifeng.com/#docs/let#%E6%9A%82%E6%97%B6%E6%80%A7%E6%AD%BB%E5%8C%BA
var x = 1;
function foo(x = x) {
  // ...
}
foo() // ReferenceError: x is not defined

/**
  *rest参数
  *ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
  *res 参数搭配的变量是一个数组，
  rest 参数，它就是一个真正的数组，该变量将多余的参数放入数组中,数组特有的方法都可以使用
*/
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}
var a = [];
push(a, 1, 2, 3)
//rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
// 报错
function f(a, ...b, c) {
  // ...
}


//利用给接受任意参数的函数提供多个参数: 利用原生方法,求一个数组的最小/大值
function smallest(array){
  return Math.min.apply(Math, array);
}
function largest(array){
  return Math.max.apply(Math, array);
}
function multiMax(multi){
  return multi*Math.max.apply(Math, [].slice.call(arguments,1));
}

/******利用可变参数实现函数重载(overloading)****/

//一般但不够好的实现方式(函数体冗长,命令式)
//还有就是if-else-if
var ninja = {
  whatever: function() {
       switch (arguments.length) {
         case 0:
           /* do something */
           break;
         case 1:
           /* do something else */
           break;
         case 2:
           /* do yet something else */
           break;
       //and so on ...
      } 
  }
}

//会有一些函数调用开销,只适用于不同数量的参数,但不区分类型,参数名称等
function addMethod(object, name, fn) {
  var old = object[name];
  //这些绑定函数没有储存在任何典型的数据结构中,而是在闭包里作为引用进行储存?
  object[name] = function(){
    if (fn.length == arguments.length)
      return fn.apply(this, arguments)
    else if (typeof old == 'function')
      return old.apply(this, arguments);
  };
}
var ninjas = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};
 addMethod(ninjas, "find", function(){
   return this.values;
});
 addMethod(ninjas, "find", function(name){
   var ret = [];
   for (var i = 0; i < this.values.length; i++)
     if (this.values[i].indexOf(name) == 0)
       ret.push(this.values[i]);
   return ret;
 });
 addMethod(ninjas, "find", function(first, last){
   var ret = [];
   for (var i = 0; i < this.values.length; i++)
     if (this.values[i] == (first + " " + last))
       ret.push(this.values[i]);
   return ret;
 });
`}
              </Highlighter>
            </dd>
          </dl>

          <h2>闭包(closure)</h2>
          <dl>
            <dd>
              函数执行后,因为垃圾回收,该函数的作用域消失,垃圾回收运行机制是啥?
            </dd>
            <dd>而闭包却能让外部的变量作用域消失后,还"活着"?</dd>
            <dd>
              <Highlighter>
                {`
function assert(value, desc) {
  const val = value
  let consoleMethod = val ? "log" : "warn";
  let consoleColor = val ? "color:green;" : "color:red;";
  console[consoleMethod]('%c'+desc,consoleColor)
}
var outerValue = 'ninja';
var later;
function outerFunction() {
  var innerValue = 'samurai';
  //在创建该函数的时候,不仅声明了函数,还创建了一个闭包, 
  //该闭包不仅包含函数声明, 还包含了函数声明的那一时刻点上该作用域中的所有变量
  function innerFunction(paramValue) { 
    assert(outerValue,"Inner can see the ninja.");
    assert(innerValue,"Inner can see the samurai.");
    assert(paramValue,"Inner can see the wakizashi.");
    // true: 作用域之外的所有变量,即便是函数声明之后的那些声明,也都包含在闭包中
    assert(tooLate,"Inner can see the ronin.");
  }
  later = innerFunction;
}
assert(!tooLate,"Outer can't see the ronin."); 
var tooLate = 'ronin';
outerFunction(); 
later('wakizashi');
`}
              </Highlighter>
            </dd>
            <dd>
              使用闭包时,闭包里的信息会一直保存在内存里,知道这些信息确保不再被使用(可以安全进行垃圾回收),
              或页面卸载时,JavaScript引擎才能清理这些信息
            </dd>

            <dt>使用闭包创造私有变量</dt>
            <dd>
              <Highlighter>
                {`
function Ninja() {
  var feints = 0;
  this.getFeints = function(){
    return feints;
  };
  this.feint = function(){
    feints++;
  }; 
}
var ninja = new Ninja();
ninja.feint();
assert(ninja.getFeints() == 1,"We're able to access the internal feint count.");
assert(ninja.feints === undefined,"And the private data is inaccessible to us.");
`}
              </Highlighter>
            </dd>

            <dt>使用闭包创造-偏应用函数(函数柯里化)</dt>
            <dd>在一个函数中填充几个参数,然后返回一个新函数的技术叫柯里化</dd>
            <dd>
              <Highlighter>
                {`
Function.prototype.partial = function() {
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function() {
    var arg = 0;
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++];
      } 
    }
    return fn.apply(this, args);
  };
};

/* 
This technique could be used to construct simple helper methods for event-binding in a library. 
The result would be a simpler API where the end user wouldn’t be inconvenienced by unnecessary function arguments, 
reducing them to a simpler function call.
*/
var bindClick = document.body.addEventListener
  .partial("click", undefined, false);
bindClick(function(){
  assert(true, "Click event bound via curried function.");
});

var delay = setTimeout.partial(undefined, 10);
delay(function(){
  assert(true,"A call to this function will be delayed 10 ms.");
});
`}
              </Highlighter>
            </dd>

            <dt>lodash中的函数柯里化实现</dt>
            <dd>todo</dd>

            <dt>立即执行函数(Immediate functions)</dt>
            <dd>立即执行函数三步骤:</dd>
            <dd>1. Creates a function instance</dd>
            <dd>2. Executes the function</dd>
            <dd>
              3. Discards the function (as there are no longer any references to
              it after the state-ment has ended)
            </dd>
            <Highlighter>
              {`
(function(){
  var numClicks = 0;
  document.addEventListener("click", function(){
    alert( ++numClicks );
  }, false);
})();
// equal to
document.addEventListener("click", (function(){
  var numClicks = 0;
  return function(){
    alert( ++numClicks );
  };
})(), false);


var div = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function() {
    alert("divs #" + i + " was clicked.");
  }, false);
}

// 仔细查看for的定义:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for (var i = 0; i < div.length; i++) (function(n){ div[n].addEventListener("click", function(){
  alert("div #" + n + " was clicked.");
}, false);
})(i);


`}
            </Highlighter>
          </dl>
        </div>

        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
