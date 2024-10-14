export interface KakaoMapProps {
  centerMove?: { lat: number; lng: number };
  categoriesStatus: string[];
  // selectedMenuTypes: any;
}

export interface Location {
  level: number;
  center: {
    lat: number;
    lng: number;
  };
}
