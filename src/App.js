import React from 'react';
import './App.css';
import Landing from './modules/Landing';
import Work from './modules/Work';
import Personal from './modules/Personal';
import {Frame, Scroll} from 'framer';

function App() {
  return (
        <div>
          <Landing />
          <Work />
          <Personal />
        </div>
  );
}

export default App;
