import { UseQueryResult } from '@tanstack/react-query';
import { ReviewResponse } from '@/requests/review/fetchReview.types';

export type UseGetReviewsResult = UseQueryResult<ReviewResponse, Error>;
