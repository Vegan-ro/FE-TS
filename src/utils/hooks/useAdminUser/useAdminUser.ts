// hooks/useAdminUsers.ts
import { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '@/api/adminUserAPI/adminUserAPI';
import { UserData } from '@/components/AdminUserTable/AdminUserTable.types';

const useAdminUsers = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers();
        setUserData(response.data.data); //데이터 설정
      } catch (error) {
        setIsError('Failed to fetch users data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUserData((prevData) => prevData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('유저 삭제 실패:', error);
      setIsError('유저 삭제에 실패했습니다.');
    }
  };

  return { userData, isLoading, isError, handleDeleteUser };
};

export default useAdminUsers;
