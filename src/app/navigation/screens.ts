import Login from '~features/auth/view/screen/Login/LoginViewController';
import Home from '~features/user/view/screen/Home/HomeViewController';
import UserList from '~features/user/view/screen/UserList/UserListViewController';
import UserWebsite from '~features/user/view/screen/UserWebsite/UserWebsiteViewController';
import Screen from '../../common/interface/screen';

// add your screen here
export const AppScreens: Screen[] = [Login, Home, UserList, UserWebsite];
