import { useQuery } from '@tanstack/react-query';
import { getRegisteredPlaces, getReportedPlaces } from '@/api/adminAPI/adminAPI';
import { ResPlaceData } from '@/api/adminAPI/adminAPI.types';
import { UseGetAdminPlaceReturn } from './useAdminPlace.types';

function useAdminPlace(): UseGetAdminPlaceReturn {
  const fetchReportedPlaces = async (): Promise<ResPlaceData[] | null> => {
    const response = await getReportedPlaces(1, 40);
    return response.data.data.reportedPlaces;
  };

  const fetchRegisteredPlaces = async (): Promise<ResPlaceData[] | null> => {
    const response = await getRegisteredPlaces(1, 40);
    return response.data.data;
  };

  const {
    data: reportedPlaces,
    isLoading: isLoadingReported,
    isError: isErrorReported,
    error: errorReported,
    refetch: refetchReported,
  } = useQuery({
    queryKey: ['reportedPlaces', 1, 40],
    queryFn: fetchReportedPlaces,
    retry: false,
  });

  const {
    data: registeredPlaces,
    isLoading: isLoadingRegistered,
    isError: isErrorRegistered,
    error: errorRegistered,
    refetch: refetchRegistered,
  } = useQuery({
    queryKey: ['registeredPlaces', 1, 40],
    queryFn: fetchRegisteredPlaces,
    retry: false,
  });

  const isLoading = isLoadingReported || isLoadingRegistered;
  const isError = isErrorReported || isErrorRegistered;
  const errorMessage = errorReported?.message || errorRegistered?.message || null;

  return {
    reportedPlaces: reportedPlaces ?? [],
    registeredPlaces: registeredPlaces ?? [],
    isLoading,
    isError,
    errorMessage,
    fetchPlaces: () => {
      console.log('refetch');
      refetchReported();
      refetchRegistered();
    },
  };
}

export default useAdminPlace;
