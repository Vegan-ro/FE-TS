import { ResPlaceData } from '@/api/adminAPI/adminAPI.types';

export interface AdminPlaceTableProps {
  placeData: ResPlaceData[];
  fetchPlaces: () => void;
}
