import { UseQueryResult } from '@tanstack/react-query';
import { Place } from '@/types/place.types';

export type UseGetPlaceResult = UseQueryResult<Place, Error>;
