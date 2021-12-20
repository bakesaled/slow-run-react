import React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  Content,
  NavList,
  StyledLink,
  SidebarLink,
} from './Sidebar.styles';

const Sidebar: React.FC = () => {
  const collapsed = false;
  return (
    <Wrapper collapsed={collapsed}>
      <Content>
        <p>SLOW RUN</p>
        <NavList>
          <SidebarLink>
            <StyledLink>
              <Link to={'/'}>Dashboard</Link>
            </StyledLink>
          </SidebarLink>
          <SidebarLink>
            <StyledLink>
              <Link to={'/activities'}>Activities</Link>
            </StyledLink>
          </SidebarLink>
        </NavList>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;
