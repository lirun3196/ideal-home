import React from 'react';
import { Highlighter } from '../../utils/highlighter';

import ListItem from '../../../baseComponents/listItem';
import PageTitle from '../../../baseComponents/pageTitle';
import WordsList from '../../../baseComponents/keywordsList';
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
          <h2>什么是声明(statement-declarations)</h2>
          <dl>
            <dt />
            <dt />
            <dd>
              <Highlighter>
                {`

`}
              </Highlighter>
            </dd>
          </dl>

          <h2>什么是表达式(expression)</h2>
          <dl>
            <dd className="refer">
              “表达式（expression）是JavaScript中的一个短语，JavaScript解释器会将其计算（evaluate）出一个结果”
            </dd>
          </dl>
          <h2>关键字与声明</h2>
        </div>
        {linkListItems.map((item, index) => (
          <ListItem items={item.items} title={item.title} key={index} />
        ))}
      </article>
    </div>
  );
}
