import { action, flow, makeObservable, observable } from 'mobx';
import { generateRandomLat, generateRandomLong } from '~core/utils/generator';
import User, { UserI } from '../model/user';
import UserRepositoryI from '../repository/userRepositoryInterface';
import { UserStoreI } from '../store/userStoreI';

class UserViewModel {
  _userRepo: UserRepositoryI;
  _userStore: UserStoreI;
  users: User[];
  loading: boolean = true;
  success: boolean = false;
  error: boolean = false;
  message: string = '';
  selectedUserId: number | null = null;

  constructor(userStore: UserStoreI, userRepo: UserRepositoryI) {
    this._userStore = userStore;
    this._userRepo = userRepo;
    makeObservable(this, {
      loading: observable,
      success: observable,
      error: observable,
      message: observable,
      selectedUserId: observable,
      getUsers: flow,
      setSelectedUser: action,
    });
    this.users = [];
  }

  setSelectedUser(id: number) {
    this._userStore.selectedUser = this.getUser(id);
  }

  *getUsers(page: number, limit: number = 10) {
    this.loading = true;
    try {
      const res: UserI[] = yield this._userRepo.getUser(page, limit);
      const _users = res.map(
        user =>
          new User({
            ...user,
            location: {
              lng: generateRandomLong(),
              lat: generateRandomLat(),
            },
          }),
      );
      if (page === 1) {
        this.users = _users;
      } else {
        this.users = [...this.users, ..._users];
      }
      this.success = true;
      this.error = false;
    } catch (e) {
      this.success = false;
      this.error = true;
      this.users = [];
    } finally {
      this.loading = false;
    }
  }

  getUser(userId: number) {
    const idx = this.users.findIndex(user => user.id === userId);
    return this.users[idx];
  }
}

export default UserViewModel;
