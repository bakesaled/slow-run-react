import React from 'react';

//Styles
import { Wrapper } from './TableCell.styles';

//Types
type Props = {
  // header: string;
  data: any;
};

const TableCell: React.FC<Props> = ({ data }) => (
  <Wrapper>
    <>{data}</>
  </Wrapper>
);

export default TableCell;
