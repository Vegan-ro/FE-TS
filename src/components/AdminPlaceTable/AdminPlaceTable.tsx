import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import AdminPlaceModal from '../AdminPlaceModal/AdminPlaceModal';
import { AdminPlaceTableProps } from './AdminPlaceTable.types';
import { tbStyles, thStyles } from './AdminPlaceTable.styles';

function AdminPlaceTable({ placeData }: AdminPlaceTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th sx={thStyles}>제보자</Th>
            <Th sx={thStyles}>가게 이름</Th>
            <Th sx={thStyles}>카테고리</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {placeData.map((place, index: number) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Th sx={tbStyles}>{place.user_id}</Th>
              <Th sx={tbStyles}>{place.name}</Th>
              <Th sx={tbStyles}>{place.category}</Th>
              <Th>
                <AdminPlaceModal placeDetail={place} />
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default AdminPlaceTable;
