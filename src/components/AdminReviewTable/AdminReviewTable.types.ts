// Review.types.ts
export interface Place {
  _id: string;
  name: string;
  address: string;
}

export interface User {
  _id: string;
  nickname: string;
  tag: string;
}

export interface ReviewData {
  _id: string;
  place_id: Place;
  content: string;
  user_id: User;
  createdAt: string;
  updatedAt: string;
}

// 리뷰 테이블에 필요한 데이터의 타입을 정의하는 인터페이스
export interface AdminReviewTableProps {
  reviews: ReviewData[];
}
