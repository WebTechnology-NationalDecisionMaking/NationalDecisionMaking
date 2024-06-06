import { signIn, signOut } from 'next-auth/react';
import { makeAutoObservable, observable, runInAction } from 'mobx';
import { User } from '@/models/app/User';
import { getUser } from '@/services/app/user/UserService';

export enum AuthenticationStatus {
  None,
  Authenticating,
  Authenticated,
}

class AuthenticationStore {
  private _user: User | null = null;

  private _loginFailed = false;

  private _status: AuthenticationStatus;

  private _isFirstTime = true;

  constructor() {
    this._status = AuthenticationStatus.None;

    makeAutoObservable<AuthenticationStore, '_user' | '_loginFailed'>(this, {
      _user: observable,
      _loginFailed: observable,
    });
  }

  async login(email: string, password: string) {
    runInAction(() => {
      this._status = AuthenticationStatus.Authenticating;
    });

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (!result) {
      runInAction(() => {
        this._loginFailed = true;
        this._status = AuthenticationStatus.None;
      });
      return;
    }

    if (!result.ok) {
      runInAction(() => {
        this._loginFailed = true;
        this._status = AuthenticationStatus.None;
      });
      return;
    }

    try {
      const user = await getUser();
      runInAction(() => {
        this._user = user;
        this._status = AuthenticationStatus.Authenticated;
      });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      runInAction(() => {
        this._loginFailed = true;
        this._status = AuthenticationStatus.None;
      });
      localStorage.removeItem('user');
    }
  }

  async logout() {
    runInAction(() => {
      this._status = AuthenticationStatus.Authenticating;
    });

    await signOut();

    runInAction(() => {
      this._user = null;
      this._status = AuthenticationStatus.None;
    });

    localStorage.removeItem('user');
  }

  async checkAuthenticationOnStart() {
    runInAction(() => {
      this._status = AuthenticationStatus.Authenticating;
    });

    this._isFirstTime = false;

    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      runInAction(() => {
        this._user = JSON.parse(cachedUser);
      });
    }

    try {
      // const user = await getUser(); // TODO
      const user: User = {
        id: '1',
        email: 'example@example.com',
        name: 'John Doe',
        createdAt: new Date(),
        image: null,
        updatedAt: new Date(),
      };
      runInAction(() => {
        this._user = user;
        this._status = AuthenticationStatus.Authenticated;
      });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      runInAction(() => {
        this._user = null;
        this._status = AuthenticationStatus.None;
      });
      localStorage.removeItem('user');
    }
  }

  get user() {
    return this._user;
  }

  get loginFailed() {
    return this._loginFailed;
  }

  get status() {
    return this._status;
  }

  get isFirstTime() {
    return this._isFirstTime;
  }
}

const authenticationStore = new AuthenticationStore();

export { authenticationStore };
export default AuthenticationStore;
