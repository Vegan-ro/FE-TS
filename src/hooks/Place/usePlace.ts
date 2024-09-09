import { useQuery } from '@tanstack/react-query';
import { getPlaceById } from '@/api/placeAPI/placeAPI';

export const usePlace = (placeId: string) => {
  return useQuery({
    queryKey: ['place', placeId],
    queryFn: () => getPlaceById(placeId),
    retry: 1,
  });
};
