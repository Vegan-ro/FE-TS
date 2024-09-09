import { Td, Tr } from '@chakra-ui/react';
import AdminTable from '../AdminTable/AdminTable';
import AdminUserModal from '../AdminUserModal/AdminUserModal';
import { AdminUserTableProps, UserData } from './AdminUserTable.types';
import { IoTrashOutline } from 'react-icons/io5';
import { ButtonWrapper, DataContent, IconWrapper, NoData, NoDataText, thStyles } from './AdminUserTable.styles';
import { useState } from 'react';

function AdminUserTable({ userData, handleDeleteUser }: AdminUserTableProps) {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const headers = ['닉네임', '이메일', '컴플레인 횟수', '관리자 여부', '상세정보'];

  const handleDelete = async (userId: string) => {
    await handleDeleteUser(userId);
  };

  const handleOpenModal = (user: UserData) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return userData.length === 0 ? (
    <DataContent>
      <NoData>
        <NoDataText>유저가 없습니다.</NoDataText>
      </NoData>
    </DataContent>
  ) : (
    <>
      <AdminTable headers={headers}>
        {userData.map((user, index: number) => (
          <Tr key={user._id} sx={thStyles}>
            <Td>{index + 1}</Td>
            <Td>{user.nickname}</Td>
            <Td>{user.email}</Td>
            <Td>{user.complaint}</Td>
            <Td>{user.is_admin ? '관리자' : '일반 유저'}</Td>
            <Td>
              <ButtonWrapper>
                <IconWrapper onClick={() => handleOpenModal(user)}>상세정보</IconWrapper>
                <IconWrapper onClick={() => handleDelete(user._id)}>
                  <IoTrashOutline size="15" />
                </IconWrapper>
              </ButtonWrapper>
            </Td>
          </Tr>
        ))}
      </AdminTable>
      {selectedUser && <AdminUserModal isOpen={isModalOpen} onClose={handleCloseModal} userDetail={selectedUser} />}
    </>
  );
}

export default AdminUserTable;
