export interface UserI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  location: GeolocationI;
}

export interface GeolocationI {
  lat: string;
  lng: string;
}

class User implements UserI {
  id: number = 0;
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  avatar: string | undefined = undefined;
  location!: GeolocationI;
  constructor(user: UserI) {
    Object.assign(this, user);
  }

  toJson() {
    const { ...properties } = this;
    return properties;
  }
}

export default User;
