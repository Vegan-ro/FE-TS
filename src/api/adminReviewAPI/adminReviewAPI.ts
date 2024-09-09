import apiFetch from '@/api/common';

const getAllReviews = async () => {
  return await apiFetch.get(`/admin/reviews`);
};

export { getAllReviews };
