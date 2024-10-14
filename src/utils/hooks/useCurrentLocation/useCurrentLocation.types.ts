export interface Location {
  center: {
    lat: number;
    lng: number;
  };
}

export interface UseCurrentLocationReturn {
  location: Location | null;
  isError: string | null;
  isLoading: boolean;
  reloadLocation: () => void;
}
