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

export interface AdminUserTableProps {
  userData: UserData[];
  handleDeleteUser: (userId: string) => Promise<void>; // handleDeleteUser 추가
}
