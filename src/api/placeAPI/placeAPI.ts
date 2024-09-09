import apiFetch from '../common';

export const getPlaceById = async (placeId: string) => {
  const response = await apiFetch.get(`/places/${placeId}`);

  if (!response.data || !response.data.data) {
    throw new Error('유효한 데이터를 찾을 수 없습니다.');
  }

  return response.data.data;
};
