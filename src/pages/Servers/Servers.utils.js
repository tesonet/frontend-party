import { always, cond, equals, ifElse, lt, sort, T } from 'ramda';

export const sortServerList = (sortBy = {}, data = []) =>
  cond([
    [
      equals('name'),
      ifElse(
        () => equals(true, sortBy.isDescending),
        () => sort((a, b) => (lt(a.name, b.name) ? 1 : -1), data),
        () => sort((a, b) => (lt(a.name, b.name) ? -1 : 1), data)
      )
    ],
    [
      equals('distance'),
      ifElse(
        () => equals(true, sortBy.isDescending),
        () => sort((a, b) => b.distance - a.distance, data),
        () => sort((a, b) => a.distance - b.distance, data)
      )
    ],
    [T, always(data)]
  ])(sortBy.key);
