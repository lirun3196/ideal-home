import React from 'react';
import Shl from 'react-syntax-highlighter/prism';
import { coy } from 'react-syntax-highlighter/styles/prism/coy';

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
          <dl>
            <dt>函数为什么如此重要?</dt>
            <dd>
              编写平均水平的代码,还是编写忍者级别的代码,取决于是否这正了解JavaScript是一门函数式语言.编写代码的水平就取决于对这一点的认知
            </dd>
            <dd>JavaScript中的函数和其他语言中的函数不同:</dd>
            <dd>
              函数可以有属性,也可以有方法,可以分配给变量和属性,也有所有普通对象拥有的特性,他的超级特性是:可以被调用
            </dd>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
          <dl>
            <dt>内联函数(inline function)</dt>
            <dd>内联函数: 有函数名的作为callback声明和方法声明的函数.</dd>
            <dd>
              在浏览器中,为什么要将全局函数作为window的方法进行调用?不使用window的属性,我们没办法引用这些函数
            </dd>
            <dd>
              因为内联函数额名称只能在函数内部可见,和变量名称很像,
              他们的作用域仅限于声明他们的函数
            </dd>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
          <dl>
            <dt>回调</dt>
            <dd>
              当我们定义一个函数稍后执行时, 无论何时定义,
              在浏览器还是其他地方执行, 我们定义的就是所谓的回调(callback)
            </dd>
            <dd>
              该术语源于: 我们定义一个函数,
              以便其他一些代码在适当的时机回头再调用它.
            </dd>
          </dl>
          <dl>
            <dt>函数存储</dt>
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
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
          <dl>
            <dt>自记忆函数(Self-memoizing)</dt>
            <dd>记住以前计算的值,避免已经执行过的复杂计算,以提高性能</dd>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
          <dl>
            <dt>参数</dt>
            <dd>
              <Shl language="javascript" style={coy}>
                {`
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
              </Shl>
            </dd>
          </dl>
          <dl>
            <dt>闭包(closure)</dt>
            <dd>
              函数执行后,因为垃圾回收,该函数的作用域消失,垃圾回收运行机制是啥?
            </dd>
            <dd>而闭包却能让外部的变量作用域消失后,还"活着"?</dd>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
            <dd>
              使用闭包时,闭包里的信息会一直保存在内存里,知道这些信息确保不再被使用(可以安全进行垃圾回收),
              或页面卸载时,JavaScript引擎才能清理这些信息
            </dd>
            <dt>使用闭包创造私有变量</dt>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
        </div>
        <Shl language="javascript" style={coy} />
        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
