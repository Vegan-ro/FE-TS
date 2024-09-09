import { useQuery } from '@tanstack/react-query';
import { getPlaceById } from '@/api/placeAPI/placeAPI';
import { UseGetPlaceResult } from './usePlace.types';
import { Place } from '@/types/place.types';

export const useGetPlace = (placeId: string): UseGetPlaceResult => {
  return useQuery<Place, Error>({
    queryKey: ['place', placeId],
    queryFn: () => getPlaceById(placeId),
    retry: 1,
  });
};
