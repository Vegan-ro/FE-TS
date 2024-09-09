import { UseQueryResult } from '@tanstack/react-query';
import { ReviewResponse } from '@/api/reviewAPI/reviewAPI.types';

export type UseGetReviewsResult = UseQueryResult<ReviewResponse, Error>;
