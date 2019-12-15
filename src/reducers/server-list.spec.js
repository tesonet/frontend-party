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
  expect(newState).toStrictEqual({
    servers: [{
      name: 'aName'
    }, {
      name: 'zName'
    }],
    order: 1,
    sortField: 'name'
  });
});

test('"sort-servers" should sort server list by passed column', () => {
  const newState = serverList({
    servers: [
      {
        distance: 9999,
      },
      {
        distance: 1,
      }
    ]
  }, {
    type: 'sort-servers',
    payload: 'distance'
  });
  expect(newState).toStrictEqual({
    servers: [
      {
        distance: 1
      },
      {
        distance: 9999
      }
    ],
    order: 1,
    sortField: 'distance'
  });
});

test('next call to "sort-servers" with the same column name should toggle sort direction', () => {
  const newState = serverList({
    servers: [
      {
        name: 'aName',
      },
      {
        name: 'zName',
      }
    ],
    sortField: 'name',
    order: 1,
  }, {
    type: 'sort-servers',
    payload: 'name'
  });
  expect(newState).toStrictEqual({
    servers: [
      {
        name: 'zName'
      },{
        name: 'aName'
      }
    ],
    order: -1,
    sortField: 'name'
  });
});

test('"reset-servers" should empty server list', () => {
  expect(serverList({
    servers: [{}, {}]
  }, {
    type: 'reset-servers'
  }).servers).toStrictEqual([]);
});