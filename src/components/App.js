import React from 'react';
import './App.css';
import SongList from './SongList';

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="eight wide column">
          <SongList />          
        </div>
      </div>
    </div>
  );
}

export default App;
