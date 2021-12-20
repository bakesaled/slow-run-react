import React from 'react';

//Styles
import { Wrapper, Content, ContentWrapper } from './Table.styles';
import { TableBody } from './TableBody.styles';

//Components
import TableRow from './TableRow';
import TableCell from './TableCell';
import { TableHead } from './TableHead.styles';
import { TableHeadRow } from './TableHeadRow.styles';
import TableHeadColumn from './TableHeadColumn';

//Types
export type TableColumn = {
  name: string;
  text: string;
};

type Props = {
  header: string;
  data: any[];
  columns: TableColumn[];
};

const Table: React.FC<Props> = ({ header, data, columns }) => (
  <Wrapper>
    <h1>{header}</h1>
    <ContentWrapper>
      <Content>
        <TableHead>
          <TableHeadRow>
            {columns.map((col) => (
              <TableHeadColumn key={col.name} column={col}></TableHeadColumn>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const keys = Object.keys(row);
            console.log(row);
            console.log(Object.keys(row));
            return (
              <TableRow key={row.id}>
                {keys.map((key) => (
                  <TableCell key={key} data={row[key]}></TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Content>
    </ContentWrapper>
  </Wrapper>
);

export default Table;
