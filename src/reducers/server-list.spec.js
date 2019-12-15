import serverList from './server-list';

test('initially should contain empty servers array', () =>{
  expect(serverList().servers).toStrictEqual([]);
});

test('"set-servers" should load servers ordered by name initially', () => {
  expect(serverList(undefined, {
    type: 'set-servers',
    payload: [
      {
        name: 'zName'
      },
      {
        name: 'aName'
      }
    ]
  }).servers[0].name).toBe('aName');
});

test('"sort-servers" should sort server list by passed column', () => {
  expect(serverList({
    servers: [
      {
        name: 'aName',
        distance: 9999,
      },
      {
        name: 'zName',
        distance: 1,
      }
    ]
  }, {
    type: 'sort-servers',
    payload: 'distance'
  }).servers[0].distance).toBe(1);
});

test('next call to "sort-servers" with the same column name should toggle sort direction', () => {
  expect(serverList({
    servers: [
      {
        name: 'aName',
        distance: 9999,
      },
      {
        name: 'zName',
        distance: 1,
      }
    ],
    sortField: 'name',
    order: 1,
  }, {
    type: 'sort-servers',
    payload: 'distance'
  }).servers[0].name).toBe('zName');
});

test('"reset-servers" should empty server list', () => {
  expect(serverList({
    servers: [{}]
  }, {
    type: 'reset-servers'
  }).servers).toStrictEqual([]);
});