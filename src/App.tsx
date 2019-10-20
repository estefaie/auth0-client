import React from 'react';
import NavBar from './NavBar';
import Questions from './Questions';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Questions />
    </div>
  );
};

export default App;
