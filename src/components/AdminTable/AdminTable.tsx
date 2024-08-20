import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { AdminTableProps } from './AdminTable.types';
import { thStyles } from './AdminTable.styles';

function AdminTable({ headers, children }: AdminTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            {headers.map((header: string, index: number) => (
              <Th key={index} sx={thStyles}>
                {header}
              </Th>
            ))}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;
