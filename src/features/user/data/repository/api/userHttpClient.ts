import HttpTransport from '~core/services/transport/http/base';
import UserHttpClientI, { UserResponse } from './userHttpClientInterface';

class UserHttpClient
  extends HttpTransport<UserResponse>
  implements UserHttpClientI
{
  constructor() {
    super('https://reqres.in/api/');
  }

  getUser(page: number, limit: number = 10) {
    return this.get(`users?page=${page}&per_page=${limit}`);
  }
}

export const _userHttpClient = new UserHttpClient();

export default UserHttpClient;
