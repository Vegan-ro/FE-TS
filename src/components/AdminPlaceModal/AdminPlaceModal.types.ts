import { ResPlaceData } from '@/api/adminAPI/adminAPI.types';

export interface AdminPlaceModalProps {
  placeDetail: ResPlaceData;
  tab: string;
  fetchPlaces: () => void;
}
