import { Review } from '@/types/review.types';
import { UseQueryResult } from '@tanstack/react-query';

export type UseGetReviewsResult = UseQueryResult<Review[], Error>;
