import React from 'react';
import { Highlighter } from '../../utils/highlighter';

import ListItem from '../../../baseComponents/listItem';
import PageTitle from '../../../baseComponents/pageTitle';
import WordsList from '../../../baseComponents/keywordsList';
import eventData from './data.json';

export default function TechEvent(props) {
  const data = eventData;
  const linkListItems = data.linkListItems.slice();
  const reactQues = data.reactQues.slice();
  return (
    <div className="tech tech-event">
      <header>
        <PageTitle title={data.pageTitle} />
        <WordsList words={data.keyWords} />
      </header>
      <article>
        <div className="object">
          <h2>Object</h2>
          {reactQues.map((item, index) => (
            <ListItem items={item.items} title={item.title} key={index} />
          ))}
          <dl>
            <dt>对象的一些重要属性和方法,相关操作符</dt>
            <dt>instanceof</dt>
            <dd>
              <Highlighter>
                {`
// returns false, checks the prototype chain, finds undefined
'simpleStr' instanceof String; 
`}
              </Highlighter>
            </dd>

            <dt>__proto__</dt>
            <dt>__proto__与prototype属性的关系</dt>
            <dt>比如: Function.prototype和Function.__proto__的关系</dt>

            <dt>constructor</dt>
            <dd>
              Each object in JavaScript has an implicit property named
              constructor that references the constructor that was used to
              create the object. And because the prototype is a property of the
              constructor, each object has a way to find its prototype by
              <b> obj.constructor.prototype</b>
            </dd>
            <dd>
              <Highlighter>
                {`function Ninja(){
    this.swung = true;
    //和原型的同名方法,对象属性只有在自身查找失败的时候才会去查询原型,这为方法重载提供了理论支持
    this.swingSword = function(){
      return !this.swung;
    };
}
//new 操作符,创建一个实例
let ninja = new Ninja();
Ninja.prototype.swingSword = function(){
  return this.swung;
};
//return false
ninja.swingSword()
//不用知道原有构造函数,就可以再次创建一个新实例
let ninja2 = new ninja.constructor();
//true
console.log(ninja2 instanceof Ninja);
//false 不是同一个实例
console.log(ninja2 === ninja);
`}
              </Highlighter>
            </dd>
            <dt>用原型实现继承</dt>
            <dd>
              <Highlighter>
                {`
function Person(){}
Person.prototype.dance = function(){};

function Ninja(){};
Ninja.prototype = new Person();
var ninja = new Ninja();
/*
另一种方法是: Ninja.prototype = Person.prototype,
但是这样做的副作用是: 由于对象是引用赋值,Ninja原型上的任何修改都会影响Person的原型
*/
// instanceof操作符 测试构造函数的原型属性(Person/Ninja.prototype)是否在对象(ninja)的原型链中,
// 如果在(双方的原型没得手动更改过的情况下),表示该对象就是该构造函数的实例
assert(ninja instanceof Ninja,"ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person, "... and the Person prototype");
assert(ninja instanceof Object, "... and the Object prototype");
assert(typeof ninja.dance == "function", "... and can dance!")
`}
              </Highlighter>
            </dd>
          </dl>

          <h2>包装对象</h2>
          <dl>
            <dd className="refer">
              “字符串既然不是对象，为什么它会有属性呢？
              只要引用了字符串s的属性，JavaScript就会将字符串值通过调用new
              String(s)的方式转换成对象，
              这个对象继承了字符串的方法（见6.2.2节），并被用来处理属性的引用。一旦属性引用结束，这个新创建的对象就会销毁
              （其实在实现上并不一定创建或销毁这个临时对象，然而整个过程看起来是这样）。”
              “同字符串一样，数字和布尔值也具有各自的方法：通过Number()和Boolean()构造函数创建一个临时对象，这些方法的调用均是来自于这个临时对象。
              null和undefined没有包装对象：访问它们的属性会造成一个类型错误。”
            </dd>
            <dd className="refer">
              “存取字符串、数字或布尔值的属性时创建的临时对象称做包装对象，
              它只是偶尔用来区分字符串值和字符串对象、数字和数值对象以及布尔值和布尔对象。
              通常，包装对象只是被看做是一种实现细节，而不用特别关注。
              由于字符串、数字和布尔值的属性都是只读的，并且不能给它们定义新属性，因此你需要明白它们是有别于对象的。”
            </dd>
            <dd>
              <Highlighter>
                {`
var s="hello world!";//一个字符串
//使用字符串的属性,JavaScript就会将字符串值通过调用new String(s)的方式转换成对象
var word=s.substring(s.indexOf("")+1,s.length);
s.len=4
//t的值将是undefined,一旦属性引用结束(s.len)，这个新创建的对象就会销毁
var t=s.len

var s="test",n=1,b=true;//一个字符串、数字和布尔值
var S=new String(s);//一个字符串对象
var N=new Number(n);//一个数值对象
var B=new Boolean(b);//一个布尔对象
console.log('S==s:',S==s) 
console.log('S===s:',S===s)
console.log('typeof s:',typeof s)
console.log('typeof S:',typeof S)
console.log('N==n:',N==n)
console.log('N===n:',N===n)
console.log('B==b:',B==b)
console.log('B===b:',B===b)
              `}
              </Highlighter>
            </dd>
          </dl>

          <h2>面向对象</h2>
          <dl>
            <dd className="refer">
              “JavaScript是一种面向对象的语言。不严格地讲，这意味着我们不用全局的定义函数去操作不同类型的值，
              数据类型本身可以定义方法（method）来使用值”
            </dd>
            <dd>
              <Highlighter>
                {`
//“要对数组a中的元素进行排序，不必要将a传入sort()函数，而是调用a的一个方法sort()”
a.sort();//sort(a)的面向对象的版本
              `}
              </Highlighter>
            </dd>
          </dl>

          <dd>
            <Highlighter>
              {`
              
              `}
            </Highlighter>
          </dd>
        </div>
        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
