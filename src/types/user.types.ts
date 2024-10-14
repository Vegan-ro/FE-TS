export type User = {
  _id: string;
  email: string;
  name: string | null;
  nickname: string;
  phone: string | null;
  tag: string;
  tag_img: TagImage;
  complaint: number;
  is_admin: boolean;
  deleted_at: string | null;
  createdAt: string;
  updatedAt: string;
};

type TagImage = {
  _id: string;
  name: string;
  url: {
    basic_url: string;
    pin_url: string;
  };
  createdAt: string;
  updatedAt: string;
};
