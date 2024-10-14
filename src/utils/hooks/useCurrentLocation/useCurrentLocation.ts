import { useState, useEffect, useCallback } from 'react';
import { Location, UseCurrentLocationReturn } from './useCurrentLocation.types';

const useCurrentLocation = (): UseCurrentLocationReturn => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isError, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const reloadLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setIsError('Geolocation is not supported by your browser.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          center: { lat: latitude, lng: longitude },
        });
        setIsLoading(false);
      },
      (error) => {
        setIsError(`Unable to retrieve location, ${error.message} `);
        setIsLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    reloadLocation();
  }, [reloadLocation]);

  return { location, isError, isLoading, reloadLocation };
};

export default useCurrentLocation;
