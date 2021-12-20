import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar';

//Styles
import { GlobalStyle } from './GlobalStyle';
import MainContent from './components/MainContent';

const App: React.FC = () => (
  <Router>
    <MainContent />
    <GlobalStyle />
  </Router>
);

export default App;
