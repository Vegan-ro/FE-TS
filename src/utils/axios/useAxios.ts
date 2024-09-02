import { useEffect, useState, useCallback } from 'react';
import { UseAxiosStatus } from './useAxios.types';

const useAxios = <T>(callback: () => Promise<T>, deps: ReadonlyArray<unknown>[] = [], skip: boolean = false) => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [status, setStatus] = useState<UseAxiosStatus>('Idle');

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
    if (skip) return;
    axiosData();
  }, [axiosData, skip]);

  return { axiosData, responseData, status };
};

export default useAxios;
