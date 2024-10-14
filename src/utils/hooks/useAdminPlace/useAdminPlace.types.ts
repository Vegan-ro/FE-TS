import { ResPlaceData } from '@/requests/admin/fetchAdmin.types';

export interface UseGetAdminPlaceReturn {
  reportedPlaces: ResPlaceData[];
  registeredPlaces: ResPlaceData[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  fetchPlaces: () => void;
}
