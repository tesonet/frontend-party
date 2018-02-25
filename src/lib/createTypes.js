import { pipe, reduce } from 'ramda';

export default (base, types, nameSpace = 'testio') =>
  pipe(
    reduce(
      (result, type) => ({ ...result, [type]: `${nameSpace}/${base}/${type}` }),
      {},
    ),
    Object.freeze,
  )(types);
