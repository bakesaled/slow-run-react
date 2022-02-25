import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

import { Wrapper, Content } from './MainContent.styles';
import Sidebar from '../Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MainContent: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  return (
    <Wrapper>
      {account && <Sidebar />}
      <Content>
        <Header />
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default MainContent;
