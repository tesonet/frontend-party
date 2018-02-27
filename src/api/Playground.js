import Base from './Base';

export default class Playground extends Base {
  token(data) {
    return this.fetch({ data, method: 'POST', path: 'tokens' });
  }

  servers(token) {
    const headers = { Authorization: `Bearer ${token}` };
    return this.fetch({ headers, path: 'servers' });
  }

  fetch(props) {
    return this.request({ base: 'http://playground.tesonet.lt', ...props });
  }
}
