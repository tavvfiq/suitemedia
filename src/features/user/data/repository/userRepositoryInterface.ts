import { UserI } from '../model/user';

interface UserRepositoryI {
  getUser(page: number, limit: number): Promise<UserI[]>;
}

export default UserRepositoryI;
