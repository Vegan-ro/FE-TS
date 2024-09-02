import apiFetch from '@/api/common';
import { PlaceData } from './adminPlaceAPI.types';

// 제보 장소 등록
const createPlace = async (placeData: PlaceData) => {
  return await apiFetch.post('/admin/places', placeData);
};

// 제보 장소 조회
const getReportedPlaces = async (pageNumber: number, pageSize: number) => {
  return await apiFetch.get(`/admin/reports?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

// 제보 장소 삭제(DB)
const deleteReportedPlace = async (placeId: string) => {
  return await apiFetch.delete(`/admin/reports/${placeId}`);
};

// 등록 장소 조회
const getRegisteredPlaces = async (pageNumber: number, pageSize: number) => {
  return await apiFetch.get(`/admin/places?pageNumber=${pageNumber}&pageSize=${pageSize}`);
};

// 등록 장소 수정
const updateRegisteredPlace = async (placeId: string, updateData: PlaceData[]) => {
  return await apiFetch.put(`/admin/places/${placeId}`, updateData);
};

// 등록 장소 삭제(DB)
const deleteRegisteredPlace = async (placeId: string) => {
  return await apiFetch.delete(`/admin/places/${placeId}`);
};

// 등록 장소 삭제(deleted_at)
const patchRegisteredPlace = async (placeId: string) => {
  return await apiFetch.patch(`/admin/places/${placeId}`);
};

export {
  createPlace,
  getReportedPlaces,
  deleteReportedPlace,
  getRegisteredPlaces,
  updateRegisteredPlace,
  deleteRegisteredPlace,
  patchRegisteredPlace,
};
