import styled from 'styled-components';

type Props = {
  collapsed: boolean;
};

export const Wrapper = styled.div<Props>`
  min-width: ${(props) => (props.collapsed === true ? '50px' : '222px')};
  max-width: ${(props) => (props.collapsed === true ? '100px' : '222px')};
  transition: width 0.1s ease-out, min-width 0.1s ease-out;
  background: ${(props) =>
    props.collapsed === true ? 'var(--white)' : 'var(--lightGrey)'};
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  position: relative;
  padding-top: 19px;
  background: var(--lightGrey);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const NavList = styled.div`
  position: relative;
  display: block;
  height: 125px;
  padding: 30px 20px;
  border-bottom: var(--medGrey);
  background: var(--lightGrey);
  text-decoration: none;
  user-select: none;
`;

export const StyledLink = styled.div`
  text-decoration: none;
  color: black;
  > {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

export const SidebarLink = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
`;
