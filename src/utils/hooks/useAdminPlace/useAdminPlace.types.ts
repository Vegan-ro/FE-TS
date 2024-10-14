import { ResPlaceData } from '@/requests/admin/fetchAdminPlace.types';
export interface UseGetAdminPlaceReturn {
  reportedPlaces: ResPlaceData[];
  registeredPlaces: ResPlaceData[];
  isLoading: boolean;
  isError: string | null;
  fetchPlaces: () => void;
}
