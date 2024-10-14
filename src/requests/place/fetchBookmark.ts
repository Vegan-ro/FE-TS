import http from '@/requests/http';

export const getBookmarkByPlaceId = async (placeId: string) => {
  const response = await http.get(`/bookmarks/check?placeId=${placeId}`);
  return response.data.data;
};
