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
              <Shl language="javascript" style={coy}>
                {`
// returns false, checks the prototype chain, finds undefined
'simpleStr' instanceof String; 
`}
              </Shl>
            </dd>
            <dt>constructor</dt>
            <dd>
              Each object in JavaScript has an implicit property named
              constructor that references the constructor that was used to
              create the object. And because the prototype is a property of the
              constructor, each object has a way to find its prototype by
              <b> obj.constructor.prototype</b>
            </dd>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
            <dt>用原型实现继承</dt>
            <dd>
              <Shl language="javascript" style={coy}>
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
              </Shl>
            </dd>
          </dl>
        </div>
        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
