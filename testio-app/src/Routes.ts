export enum APP_ROUTES {
  FORM_PAGE = '/form',
  LOGIN_PAGE = '/'
}

const API_PATH = 'http://playground.tesonet.lt/v1';
export const API_ROUTES: { [key: string]: string } = {
  SERVER_LIST: `${API_PATH}/servers`,
  TOKEN: `${API_PATH}/tokens`
};
