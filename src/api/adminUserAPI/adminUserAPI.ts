import apiFetch from '@/api/common';

const getAllUsers = async () => {
  return await apiFetch.get('/admin/users');
};

const deleteUser = async (userId: string) => {
  return await apiFetch.delete(`/admin/users/${userId}`);
};

export { getAllUsers, deleteUser };
