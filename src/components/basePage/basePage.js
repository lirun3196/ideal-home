import React from "react";
import PageTitle from "../base/pageTitle";
import WordsList from "../base/keywordsList";
import SlideImg from "../base/slider/slideImg";
import ListItem from "../base/listItem";
import "./basePage.css";

export default function BasePage(props) {
  const data = props.data;
  const listItems = data.listItems.slice();
  const sliders = props.sliders.slice();
  return <div className="base-page">
      <header>
        <PageTitle title={data.pageTitle} />
        <WordsList words={data.keyWords} />
      </header>
      <article>
        {listItems.length >= 1 && listItems.map((item, index) => (
            <ListItem items={item.items} title={item.title} key={index} />
          ))}
        {sliders.length >= 1 && sliders.map((item, index) => (
            <SlideImg
              settings={{ className: "base-slide" }}
              paths={item.paths}
              key={index}
              describe={item.describe}
            />
          ))}
        {data.children}
      </article>
    </div>;
}
