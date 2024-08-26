export interface KakaoMapProps {
  centerMove?: { lat: number; lng: number };
  // categoriesStatus: any; // TODO 타입 지정
  // selectedMenuTypes: any;
}

export interface Location {
  level: number;
  center: {
    lat: number;
    lng: number;
  };
}
