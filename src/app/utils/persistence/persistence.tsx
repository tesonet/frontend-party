export const Key_For_Token = 'token';

// Should have used localStorage api here
export class Persistence {
  static set(key: string, value: string, end: Date = new Date(9999, 1, 1)): void {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) { // eslint-disable-line
      return;
    }
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${end.toUTCString()}; path=/`;
  }

  static get(key: string): string | undefined {
    const keyEscaped = encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&'); // eslint-disable-line
    const keyValue = document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${keyEscaped}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1'); // eslint-disable-line
    return decodeURIComponent(keyValue) || undefined;
  }

  static remove(key: string): void {
    if (this.get(key) !== null) {
      document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}