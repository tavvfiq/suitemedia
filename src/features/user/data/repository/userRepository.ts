import { UserI } from '../model/user';
import { _userHttpClient } from './api/userHttpClient';
import UserHttpClientI from './api/userHttpClientInterface';
import UserRepositoryI from './userRepositoryInterface';

class UserRepository implements UserRepositoryI {
  private _httpClient: UserHttpClientI;
  constructor(httpClient: UserHttpClientI) {
    this._httpClient = httpClient;
  }

  async getUser(page: number, limit: number): Promise<UserI[]> {
    try {
      const res = await this._httpClient.getUser(page, limit);
      const { data } = res;
      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export const _userRepository = new UserRepository(_userHttpClient);

export default UserRepository;
