import { Place } from './place.types';
import { User } from './user.types';

export type Review = {
  _id: string;
  place_id: Place;
  content: string;
  user_id: User;
  createdAt: string;
  updatedAt: string;
};
