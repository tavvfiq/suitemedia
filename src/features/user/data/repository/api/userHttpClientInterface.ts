import { AxiosResponse } from 'axios';
import { UserI } from '../../model/user';

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserI[];
}

interface UserHttpClientI {
  getUser: (
    page: number,
    limit: number,
  ) => Promise<AxiosResponse<UserResponse>>;
}

export default UserHttpClientI;
