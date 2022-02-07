import { UserI } from '../model/user';

export interface UserStoreI {
  selectedUser: UserI | null;
}
