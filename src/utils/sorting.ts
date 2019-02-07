import { ISortingOptions } from '../interfaces';

export default function sorting(options: ISortingOptions) {
  const { array, param, alphabetical } = options;
  return array.sort((a: any, b: any) => {
    const an = param ? a[param] : a;
    const bn = param ? b[param] : b;

    if (alphabetical) {
      return an.localeCompare(bn);
    }

    return (an < bn) ? -1 : (an > bn) ? 1 : 0;
  });
}
