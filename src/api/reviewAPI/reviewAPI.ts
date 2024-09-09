import apiFetch from '../common';
import { getReviewsByPlaceIdResponse } from './reviewAPI.types';

export const getReviewsByPlaceId = async (
  placeId: string,
  pageNumber: number,
  pageSize: number,
): Promise<getReviewsByPlaceIdResponse> => {
  const response = await apiFetch.get(`/reviews?placeId=${placeId}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  console.log(response.data.data);
  return response.data.data;
};
