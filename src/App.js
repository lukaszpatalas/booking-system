import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Main />
    </Router>
  );
}

export default App;
