import { http } from '@/requests/http';
import { FetchPlacesParams } from '@/requests/place/fetchPlace.types';

export const getPlaces = async () => {
  const response = await http.get('/places');
  return response.data.data;
};

export const getFilteredPlaces = async ({ params }: { params: FetchPlacesParams }) => {
  return await http.get('/places', { params });
};

export const getPlaceById = async (placeId: string) => {
  const response = await http.get(`/places/${placeId}`);

  if (!response.data || !response.data.data) {
    throw new Error('유효한 데이터를 찾을 수 없습니다.');
  }

  return response.data.data;
};
