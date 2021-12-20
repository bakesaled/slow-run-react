import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';
import NotFound from '../NotFound';
import Header from '../Header';

import { Wrapper, Content } from './MainContent.styles';
import Sidebar from '../Sidebar';

const MainContent: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Content>
    </Wrapper>
  );
};

export default MainContent;
