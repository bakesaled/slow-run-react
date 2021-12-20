import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const ContentWrapper = styled.div`
  /* display: table; */
`;

export const Content = styled.table`
  /* position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; */
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-spacing: 0;
`;
