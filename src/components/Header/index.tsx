import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

import { Wrapper, Content } from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const account = useSelector((state: RootState) => state.auth.account);
  const username = account?.user?.username;

  const handleLogout = () => {
    navigate('/logout');
  };
  return (
    <Wrapper>
      <Content>
        {username && (
          <>
            <span className="loggedin">Logged in as: {username}</span>

            <button onClick={handleLogout}>
              <span>Logout</span>
            </button>
          </>
        )}
        {!username && location.pathname !== '/login' && (
          <Link to="/login">
            <span className="login">Log in</span>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
