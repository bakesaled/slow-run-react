import React from 'react';

//Styles
import { Wrapper, Content } from './TableHeadColumn.styles';

//Types
type Props = {
  // header: string;
  column: any;
};

const TableHeadColumn: React.FC<Props> = ({ column }) => (
  <Wrapper>
    <Content>
      <>{column.text}</>
    </Content>
  </Wrapper>
);

export default TableHeadColumn;
