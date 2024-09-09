import { Place } from './place.types';
import { User } from './user.types';

export type Review = {
  _id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user_id: User;
  place_id: Place;
};
