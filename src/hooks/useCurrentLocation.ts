import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState<{ center: { lat: number; lng: number } }>({ center: { lat: 0, lng: 0 } });
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          center: { lat: latitude, lng: longitude },
        });
        setIsLoading(false);
      },
      (err: GeolocationPositionError) => {
        setError(new Error(err.message));
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      getCurrentPosition();
    } else {
      setError(new Error('geolocation 사용 불가, 현재 위치를 불러올 수 없습니다.'));
    }
  }, []);

  return { location, error, isLoading, reloadLocation: getCurrentPosition };
};

export default useCurrentLocation;
