import { makeObservable, observable } from 'mobx';
import { UserI } from '../model/user';
import { UserStoreI } from './userStoreI';

class UserStore implements UserStoreI {
  selectedUser: UserI | null = null;
  constructor() {
    makeObservable(this, {
      selectedUser: observable,
    });
    this.selectedUser = null;
  }
}

const userStore = new UserStore();

export default userStore;
