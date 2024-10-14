import http from '@/requests/http';

interface FetchPlacesParams {
  center: string;
  radius?: number;
  size?: number;
  category?: string;
  search?: string;
}

export const getPlaces = async () => {
  const response = await http.get('/places');
  return response.data.data;
};

// /places?center=x,y&radius=number&size=number&category=value&search=value
export const getFilteredPlaces = async ({ params }: { params: FetchPlacesParams }) => {
  return await http.get('/places', { params });
};

export const getPlace = async (placeId: string) => {
  const response = await http.get(`/places/${placeId}`);
  return response.data.data;
};
