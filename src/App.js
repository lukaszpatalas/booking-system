import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Main />
      </div>
    </Router>
  );
}

export default App;
