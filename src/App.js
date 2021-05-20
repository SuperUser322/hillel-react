import './App.css';
import React from 'react';
import news from './news.json';
import directories from './directories.json';

function App1(props) {
  return (
    <div>
      {news.map(el => (
        <ul key={el.id}>
          <li><h2>{el.title}</h2></li>
          <li>
            <div className = {(el.isSpecial) ? "Red-color" : ""}
            dangerouslySetInnerHTML={{ __html: el.content }} />
          </li>
          <li>{el.dateCreated}</li>
          <ul>
            {el.categories.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {(el.link) ? <li><a href={el.link}>{el.link}</a></li> : ""}
          {(el.photo) ? <li><img src={el.photo} alt={el.title}/></li> : ""}
          <li>{el.author}</li>
        </ul>
      ))}
    </div>
  )
}

const App2 = ({directories}) => {
  return (
    <ul>
      {directories.map(({ id, name, children }) => (
        <li key={id}>
          <i className = {name.includes('.docx') ? 'fas fa-file-word' :
          name.includes('.xlsx') ? 'fas fa-file-excel' :
          name.includes('.pdf') ? 'fas fa-file-pdf' :
          'fa fa-folder'} aria-hidden="true"></i>
          <p>{name}</p>
          {children && <App2 directories={children} />}
        </li>
      ))}
    </ul>
  )
};

console.log(App1);
function App() {
  return (
    <React.Fragment>
    <App1 />
    <App2 directories={directories} />
    </React.Fragment>
  )
}

export default App;
