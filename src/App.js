import React from 'react';

import './App.css';
import App1 from './components/App1.js';
import App2 from './components/App2.js';
import directories from './directories.json';

function App(props) {
  return (
    <React.Fragment>
      <div id="first-path">
        <h2>First path</h2>
        <App1 />
      </div>
      <div id="second-path">
        <h2>Second path</h2>
        <App2 directories={directories} />
      </div>
    </React.Fragment>
  )
}

export default App;
