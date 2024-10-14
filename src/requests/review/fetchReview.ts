import { http } from '@/requests/http';
import { getReviewsByPlaceIdResponse } from './fetchReview.types';

export const getReviewsByPlaceId = async (
  placeId: string,
  pageNumber: number,
  pageSize: number,
): Promise<getReviewsByPlaceIdResponse> => {
  const response = await http.get(`/reviews?placeId=${placeId}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  return response.data.data;
};
