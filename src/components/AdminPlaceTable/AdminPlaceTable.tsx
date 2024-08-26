import { Td, Tr } from '@chakra-ui/react';
import AdminTable from '../AdminTable/AdminTable';
import { AdminPlaceTableProps } from './AdminPlaceTable.types';
import AdminPlaceModal from '../AdminPlaceModal/AdminPlaceModal';
import { IoTrashOutline } from 'react-icons/io5';
import { ButtonWrapper, DataContent, IconWrapper, NoData, NoDataText, tdStyles } from './AdminPlaceTable.styles';

function AdminPlaceTable({ placeData }: AdminPlaceTableProps) {
  const headers = ['가게 이름', '가게 형태', '채식 메뉴'];

  const handleDelete = async () => {
    // try {
    //   await deletePlace(place._id);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return placeData.length === 0 ? (
    <DataContent>
      <NoData>
        <NoDataText>제보받은 장소가 없습니다.</NoDataText>
      </NoData>
    </DataContent>
  ) : (
    <AdminTable headers={headers}>
      {placeData.map((place, index: number) => (
        <Tr key={index} sx={tdStyles}>
          <Td>{index + 1}</Td>
          <Td>{place.name}</Td>
          <Td>{place.category}</Td>
          <Td>{place.vegan_option ? '일부 비건' : '전체 비건'}</Td>
          <Td>
            <ButtonWrapper>
              <AdminPlaceModal placeDetail={place} tab={place.user_id ? 'add' : 'place'} />
              <IconWrapper onClick={handleDelete}>
                <IoTrashOutline size="15" />
              </IconWrapper>
            </ButtonWrapper>
          </Td>
        </Tr>
      ))}
    </AdminTable>
  );
}

export default AdminPlaceTable;
