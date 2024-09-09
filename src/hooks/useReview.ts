import { getReviewsByPlaceId } from '@/api/reviewAPI/reviewAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetReviews = (placeId: string, pageNumber = 1, pageSize = 3) => {
  return useQuery({
    queryKey: ['reviews', placeId, pageNumber, pageSize],
    queryFn: () => getReviewsByPlaceId(placeId, pageNumber, pageSize),
  });
};
