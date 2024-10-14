import { ResPlaceData } from '@/requests/admin/fetchAdmin.types';

export interface AdminPlaceModalProps {
  placeDetail: ResPlaceData;
  tab: string;
  fetchPlaces: () => void;
}
