import './App.css';
import React from 'react';
import news from './news.json';

function App1() {
  return (
    <div>
      {news.map(el => (
        <ul key={el.id}>
          <li><h3>{el.title}</h3></li>
          <li>
            <div className = {el.isSpecial ? "Red-color" : ""}
            dangerouslySetInnerHTML={{ __html: el.content }} />
          </li>
          <li>{el.dateCreated}</li>
          <ul>
            {el.categories.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {el.link && <li><a href={el.link}>{el.link}</a></li>}
          {el.photo && <li><img src={el.photo} alt={el.title}/></li>}
          <li>{el.author}</li>
        </ul>
      ))}
    </div>
  )
}

export default App1;
