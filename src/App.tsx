import React from 'react';

import Header from './compoents/Header';
import Home from './compoents/Home';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
