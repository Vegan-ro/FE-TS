import { http } from '@/requests/http';
import { ReportPlaceData } from '@/requests/report/fetchReport.types';
import notify from '@/utils/hooks/useToast/notify';
import { AxiosError } from 'axios';

export const createReportPlace = async (AddPlaceData: ReportPlaceData) => {
  try {
    const response = await http.post(`/reports`, AddPlaceData);
    notify('success', '장소가 제보되었습니다.');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.status === 401) {
        notify('error', '로그인이 되어있는지 확인해주세요.');
      } else {
        notify('error', '장소 제보에 실패하였습니다.');
      }
    } else {
      notify('error', '네트워크 문제 또는 기타 에러가 발생하였습니다.');
    }
    console.error(error);
    return null;
  }
};
