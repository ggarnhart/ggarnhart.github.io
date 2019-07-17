import React from 'react';
import './App.css';
import Landing from './modules/Landing';
import Work from './modules/Work';
import Personal from './modules/Personal';
import Medium from './modules/Medium';

function App() {
  return (
        <div>
          <Landing />
          <Work />
          <Personal />
          <Medium />
        </div>
  );
}

export default App;
