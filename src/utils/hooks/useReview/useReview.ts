import { getReviewsByPlaceId } from '@/api/reviewAPI/reviewAPI';
import { useQuery } from '@tanstack/react-query';
import { UseGetReviewsResult } from './useReview.types';
import { ReviewResponse } from '@/api/reviewAPI/reviewAPI.types';

export const useGetReviews = (placeId: string, pageNumber = 1, pageSize = 3): UseGetReviewsResult => {
  return useQuery<ReviewResponse, Error>({
    queryKey: ['reviews', placeId, pageNumber, pageSize],
    queryFn: async () => {
      const response = await getReviewsByPlaceId(placeId, pageNumber, pageSize);
      if (response === null) {
        throw new Error('리뷰를 가져오는 데 실패했습니다.');
      }
      return response;
    },
    retry: 1,
  });
};
