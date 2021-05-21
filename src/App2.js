import './App.css';
import React from 'react';

const App2 = ({directories}) => {
  return (
    <ul className="iconed-mark">
      {directories.map(({ id, type, name, children }) => (
        <li key={id} className="iconed-mark">
          <i className = {name.includes('.docx') ? 'fas fa-file-word' :
          name.includes('.xlsx') ? 'fas fa-file-excel' :
          name.includes('.pdf') ? 'fas fa-file-pdf' :
          'fa fa-folder'} aria-hidden="true"></i>
          <p>{name}</p>
          {type==="dir" && <App2 directories={children} />}
        </li>
      ))}
    </ul>
  )
};

export default App2;
