import { Review } from '@/types/review.types';

export type ReviewResponse = {
  reviews: Review[];
  totalCount: number;
};

export type getReviewsByPlaceIdResponse = ReviewResponse | null;
