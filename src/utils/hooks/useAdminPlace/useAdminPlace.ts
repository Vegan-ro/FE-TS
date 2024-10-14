import { useState, useEffect, useCallback } from 'react';
import { getRegisteredPlaces, getReportedPlaces } from '@/requests/admin/fetchAdminPlace';
import { ResPlaceData } from '@/requests/admin/fetchAdminPlace.types';
import { UseGetAdminPlaceReturn } from './useAdminPlace.types';

function useAdminPlaces(): UseGetAdminPlaceReturn {
  const [reportedPlaces, setReportedPlaces] = useState<ResPlaceData[] | null>(null);
  const [registeredPlaces, setRegisteredPlaces] = useState<ResPlaceData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchPlaces = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);

    try {
      const [reportedResponse, registeredResponse] = await Promise.all([
        getReportedPlaces(1, 10),
        getRegisteredPlaces(1, 10),
      ]);

      setReportedPlaces(reportedResponse.data.data.reportedPlaces);
      setRegisteredPlaces(registeredResponse.data.data);
    } catch (error) {
      setIsError('Error occurred while loading data.');
      console.error('Failed to fetch places', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  const dataIsDefault = reportedPlaces === null || registeredPlaces === null;

  return {
    reportedPlaces: reportedPlaces ?? [],
    registeredPlaces: registeredPlaces ?? [],
    isLoading: isLoading || dataIsDefault,
    isError,
    fetchPlaces,
  };
}

export default useAdminPlaces;
