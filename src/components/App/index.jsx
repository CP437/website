import React from 'react';
import './index.css';
import data from '../../assets/strings.json';

export default () => (
  <main>
    <h1>{ data.intro.title }</h1>
    { data.intro.descriptions.map((desc: string, i: number) => <p key={ i }>{ desc }</p>) }

    <h1>{ data.codepage.title }</h1>
    <p>{ data.codepage.description }</p>

    <h2>{ data.DOSVGA437.title }</h2>
    { data.DOSVGA437.descriptions.map((desc: string, i: number) => <p key={ i }>{ desc }</p>) }

    <h1>{ data.downloads.title }</h1>
    <ul>
      {
        Object.keys(data.downloads.links).map((font, i) => (
          <li key={ i }>
            <a href={
              `https://github.com/CP437/PerfectDOSVGA437/raw/master/${font}.ttf`
            }>
              { data.downloads.links[font] }
            </a>
          </li>
        ))
      }
    </ul>
  </main>
);
