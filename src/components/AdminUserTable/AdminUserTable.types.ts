// 유저 데이터를 정의하는 인터페이스
export interface UserData {
  _id: string;
  email: string;
  nickname: string;
  complaint: number;
  is_admin: boolean;
  phone?: string;
  tag?: string;
  tag_img?: string;
  createdAt: string;
  updatedAt: string;
}

// 유저 테이블에 필요한 데이터의 타입을 정의하는 인터페이스
export interface AdminUserTableProps {
  userData: UserData[];
}
