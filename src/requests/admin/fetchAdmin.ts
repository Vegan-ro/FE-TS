import { http } from '@/requests/http';
import { PlaceData } from '@/requests/admin/fetchAdmin.types';

// 제보 장소 등록
const createPlace = async (placeData: PlaceData) => {
  return await http.post('/admin/places', placeData);
};

// 제보 장소 조회
const getReportedPlaces = async (pageNumber: number, pageSize: number) => {
  return await http.get(`/admin/reports?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

// 제보 장소 삭제(DB)
const deleteReportedPlace = async (placeId: string) => {
  return await http.delete(`/admin/reports/${placeId}`);
};

// 등록 장소 조회
const getRegisteredPlaces = async (pageNumber: number, pageSize: number) => {
  return await http.get(`/admin/places?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

// 등록 장소 수정
const updateRegisteredPlace = async (placeId: string, updateData: PlaceData[]) => {
  return await http.put(`/admin/places/${placeId}`, updateData);
};

// 등록 장소 삭제(DB)
const deleteRegisteredPlace = async (placeId: string) => {
  return await http.delete(`/admin/places/${placeId}`);
};

// 등록 장소 삭제(deleted_at)
const patchRegisteredPlace = async (placeId: string) => {
  return await http.patch(`/admin/places/${placeId}`);
};

//관리자 리뷰 조회
const getAllReviews = async () => {
  return await http.get(`/admin/reviews`);
};

//관리자 유저 조회
const getAllUsers = async () => {
  return await http.get('/admin/users');
};
//관리자 유저 삭제
const deleteUser = async (userId: string) => {
  return await http.delete(`/admin/users/${userId}`);
};

export {
  createPlace,
  getReportedPlaces,
  deleteReportedPlace,
  getRegisteredPlaces,
  updateRegisteredPlace,
  deleteRegisteredPlace,
  patchRegisteredPlace,
  getAllReviews,
  getAllUsers,
  deleteUser,
};
