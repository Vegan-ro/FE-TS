import { useState, useEffect, useCallback } from 'react';
import { Status, UseAxiosReturn } from './useAxios.d';

const useAxios = <T>(
  callback: () => Promise<T>,
  deps: React.DependencyList = [],
  ignore: boolean = false,
): UseAxiosReturn<T> => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>('Idle');

  const axiosData = useCallback(async () => {
    setStatus('Loading');
    try {
      const data = await callback();
      setResponseData(data);
      setStatus('Success');
      return data;
    } catch (error) {
      setStatus('Error');
      throw error;
    }
  }, deps);

  useEffect(() => {
    if (ignore) return;
    axiosData();
  }, [axiosData, ignore]);

  return { axiosData, responseData, status };
};

export default useAxios;
