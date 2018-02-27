export default class Base {
  // eslint-disable-next-line class-methods-use-this
  request({ base, data, headers = {}, method = 'GET', path, version = 'v1' }) {
    const url = [base, version, path].join('/');
    const body = data ? JSON.stringify(data) : undefined;
    return fetch(url, {
      body,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      method,
    }).then(async response => {
      const content = await response.json();
      if (response.status !== 200) {
        return { error: content.message };
      }
      return content;
    });
  }
}
