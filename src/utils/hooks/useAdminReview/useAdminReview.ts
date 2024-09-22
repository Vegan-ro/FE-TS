// hooks/useAdminReviews.ts
import { useState, useEffect } from 'react';
import { getAllReviews } from '@/api/adminAPI/adminAPI'; // 리뷰 API 함수 임포트
import { ReviewData } from '@/components/AdminReviewTable/AdminReviewTable.types';

const useAdminReviews = () => {
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllReviews();
        setReviewData(response.data.data.reviews); // 데이터 설정
      } catch (error) {
        setIsError('Failed to fetch review data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { reviewData, isLoading, isError };
};

export default useAdminReviews;
