import { useQuery } from '@tanstack/react-query';
import { getPlaceById } from '@/api/placeAPI/placeAPI';
import { UseGetPlaceResult } from './usePlace.types';

export const useGetPlace = (placeId: string): UseGetPlaceResult => {
  return useQuery({
    queryKey: ['place', placeId],
    queryFn: () => getPlaceById(placeId),
    retry: 1,
  });
};
