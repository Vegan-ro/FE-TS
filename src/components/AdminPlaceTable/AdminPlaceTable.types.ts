import { ResPlaceData } from '@/requests/admin/fetchAdmin.types';

export interface AdminPlaceTableProps {
  placeData: ResPlaceData[];
  fetchPlaces: () => void;
}
