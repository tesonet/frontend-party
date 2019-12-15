import serverList from './server-list';

test('initially should contain empty servers array', () =>{
  expect(serverList().servers).toStrictEqual([]);
});

test('"set-servers" should load servers ordered by name initially', () => {
  const newState = serverList(undefined, {
    type: 'set-servers',
    payload: [
      {
        name: 'zName'
      },
      {
        name: 'aName'
      }
    ]
  });
  expect(newState.servers[0].name).toBe('aName');
  expect(newState.servers[1].name).toBe('zName');
});

test('"sort-servers" should sort server list by passed column', () => {
  const newState = serverList({
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
  });
  expect(newState.servers[0].distance).toBe(1);
  expect(newState.servers[1].distance).toBe(9999);
});

test('next call to "sort-servers" with the same column name should toggle sort direction', () => {
  const newState = serverList({
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
    payload: 'name'
  });
  expect(newState.servers[0].name).toBe('zName');
  expect(newState.servers[1].name).toBe('aName');
});

test('"reset-servers" should empty server list', () => {
  expect(serverList({
    servers: [{}, {}]
  }, {
    type: 'reset-servers'
  }).servers).toStrictEqual([]);
});