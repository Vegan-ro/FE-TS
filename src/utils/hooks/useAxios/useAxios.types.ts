export type Status = 'Idle' | 'Loading' | 'Success' | 'Error';

export interface UseAxiosReturn<T> {
  axiosData: () => Promise<T>;
  responseData: T | null;
  status: Status;
}
