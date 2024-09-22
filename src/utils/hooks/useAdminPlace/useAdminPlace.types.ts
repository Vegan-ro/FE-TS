import { ResPlaceData } from '@/api/adminAPI/adminAPI.types';

export interface UseGetAdminPlaceReturn {
  reportedPlaces: ResPlaceData[];
  registeredPlaces: ResPlaceData[];
  isLoading: boolean;
  isError: string | null;
  fetchPlaces: () => void;
}
