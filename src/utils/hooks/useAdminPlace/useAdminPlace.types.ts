import { ResPlaceData } from '@/api/adminPlaceAPI/adminPlaceAPI.types';

export interface UseGetAdminPlaceReturn {
  reportedPlaces: ResPlaceData[];
  registeredPlaces: ResPlaceData[];
  isLoading: boolean;
  isError: string | null;
  fetchPlaces: () => void;
}
