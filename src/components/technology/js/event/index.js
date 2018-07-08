import React from 'react';

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
        <div className="event-theory">
          <p>浏览器的事件轮询是单线程的. FIFO.</p>
        </div>
        <div className="event-react">
          <h2>The synthetic event system in React.js</h2>
          {reactQues.map((item, index) => (
            <ListItem items={item.items} title={item.title} key={index} />
          ))}
        </div>
        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
