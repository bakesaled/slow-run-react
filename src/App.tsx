import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/activities" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
