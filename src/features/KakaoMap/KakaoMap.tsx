import { useState, useRef, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// import PlaceMarkers from '../KakaoMap/PlaceMarkers';
import currentPositionPin from '@/assets/images/current_position_pin.png';

import { KakaoMapProps, Location } from './KakaoMap.types';

const KakaoMap = (props: KakaoMapProps) => {
  const { centerMove } = props;

  const [currentLocation, setCurrentLocation] = useState<Location>({
    level: 6,
    center: {
      lat: 37.5465029,
      lng: 127.065263,
    },
  });

  const prevCenterRef = useRef<{ lat: number; lng: number } | null>(null);

  /*현재 위치 이동, 중앙 정렬*/
  useEffect(() => {
    if (centerMove) {
      setCurrentLocation((prev) => ({
        ...prev,
        center: { lat: centerMove.lat, lng: centerMove.lng },
      }));
    }
  }, [centerMove]);

  /*현재 위치 갱신 시, 이전 좌표 정보 업데이트*/
  useEffect(() => {
    if (currentLocation.center) {
      prevCenterRef.current = currentLocation.center;
    }
  }, [currentLocation]);

  return (
    <Map id="map" style={{ height: '100%' }} center={currentLocation.center} level={8} isPanto={true}>
      // TODO PlaceMarkers 작업중
      {/* <PlaceMarkers
        categoriesStatus={categoriesStatus}
        selectedMenuTypes={selectedMenuTypes}
        handleMarkerClick={handleMarkerClick}
      /> */}
      <MapMarker
        position={currentLocation.center}
        title="Current Location"
        clickable={false}
        image={{
          src: currentPositionPin,
          size: {
            width: 32,
            height: 36,
          },
        }}
      />
    </Map>
  );
};

export default KakaoMap;
