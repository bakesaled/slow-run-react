import React from 'react';

//Styles
import { Wrapper } from './TableRow.styles';

//Types
type Props = {
  // header: string;
};

const TableRow: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <>{children}</>
  </Wrapper>
);

export default TableRow;
