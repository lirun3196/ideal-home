import React from "react";
import PageTitle from "../base/pageTitle";
import WordsList from "../base/keywordsList";
import Slider from "../base/slider/slider";
import ListItem from "../base/listItem";
import importAll from "../base/importAll";
import "./balcony.css";

export default function Balcony(props) {
  //the function of importing all image of a direction is provided by webpack, neither React nor node.js
  const images = importAll(require.context('./img', true, /^\.\/.*\.jpg|png|gif|svg$/));
  
  //At this moment, we won't change the sequence of the images, so we can use index as key
  const imgWraps = images.map((item, index) => <div key={index}>
      <img src={item} alt="" />
    </div>);
  const words = [
    { id: 1, content: "阳光" },
    { id: 2, content: "分隔" },
    { id: 3, content: "江景" }
  ];
  const disadvantageItems = [
    {
      id: 1,
      content: "从玄关进入客厅,如果中间没有隔断,就能一眼看见对面的办公楼"
    },
    { id: 2, content: "奇怪的'全封闭阳台'方式, 为了减少成本?" },
    { id: 3, content: "对面办公楼的反光" },
  ];
  const advantageItems = [
    {
      id: 1,
      content: "能同时看到两江交汇,老街"
    }
  ];
  const sliderSet = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "balcony-slide"
  };
  return <div className="balcony">
      <header>
        <PageTitle title={"阳台"} />
        <WordsList words={words} />
      </header>
      <article>
        <ListItem items={disadvantageItems} title="缺点" />
        <ListItem items={advantageItems} title="优点" />
        <Slider settings={sliderSet}>{imgWraps}</Slider>
      </article>
    </div>;
}
