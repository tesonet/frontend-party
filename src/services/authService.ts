import {routerHistory} from '../store';
import {ROUTES} from '../routes';

const USER_TOKEN_KEY = 'userToken';

class AuthService {
  private userToken: string;

  constructor() {
    this.userToken = localStorage.getItem(USER_TOKEN_KEY);
  }

  public getUserToken = () => this.userToken;

  public isLoggedIn = () => !!this.userToken;

  // Get user token from API, store it in localStorage and save it in service for easy access
  public login = async (username: string, password: string) => {
    const response = await fetch(
      'http://playground.tesonet.lt/v1/tokens',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
      }
    );
    const result = await response.json();
    if (response.ok) {
      localStorage.setItem(USER_TOKEN_KEY, result?.token);
      this.userToken = result.token;
    } else {
      throw new Error(result?.message);
    }
  }

  public logout = () => {
    this.userToken = undefined;
    localStorage.removeItem(USER_TOKEN_KEY);
    routerHistory.push(ROUTES.LOGIN);
  }
}

export const authService = new AuthService();
