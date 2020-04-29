import { sortServerList } from './Servers.utils';

describe('sortServerList', () => {
  const data = [
    { name: 'Server #1', distance: 100 },
    { name: 'Server #2', distance: 15 },
    { name: 'Server #3', distance: 1000 },
    { name: 'Server #4', distance: 130 },
    { name: 'Server #5', distance: 578 }
  ];

  it('should sort by distance', () => {
    const resultsDescending = sortServerList(
      {
        key: 'distance',
        isDescending: true
      },
      data
    );
    const expectedDescending = [
      { name: 'Server #3', distance: 1000 },
      { name: 'Server #5', distance: 578 },
      { name: 'Server #4', distance: 130 },
      { name: 'Server #1', distance: 100 },
      { name: 'Server #2', distance: 15 }
    ];
    const resultsAscending = sortServerList(
      {
        key: 'distance',
        isDescending: false
      },
      data
    );
    const expectedAscending = [
      { name: 'Server #2', distance: 15 },
      { name: 'Server #1', distance: 100 },
      { name: 'Server #4', distance: 130 },
      { name: 'Server #5', distance: 578 },
      { name: 'Server #3', distance: 1000 }
    ];

    expect(resultsDescending).toStrictEqual(expectedDescending);
    expect(resultsAscending).toStrictEqual(expectedAscending);
  });
  it('should sort by name', () => {
    const resultsDescending = sortServerList(
      {
        key: 'name',
        isDescending: true
      },
      data
    );
    const expectedDescending = [
      { name: 'Server #5', distance: 578 },
      { name: 'Server #4', distance: 130 },
      { name: 'Server #3', distance: 1000 },
      { name: 'Server #2', distance: 15 },
      { name: 'Server #1', distance: 100 }
    ];
    const resultsAscending = sortServerList(
      {
        key: 'name',
        isDescending: false
      },
      data
    );
    const expectedAscending = [
      { name: 'Server #1', distance: 100 },
      { name: 'Server #2', distance: 15 },
      { name: 'Server #3', distance: 1000 },
      { name: 'Server #4', distance: 130 },
      { name: 'Server #5', distance: 578 }
    ];

    expect(resultsDescending).toStrictEqual(expectedDescending);
    expect(resultsAscending).toStrictEqual(expectedAscending);
  });
  it('should return same items if no sorting key is found', () => {
    const resultsDescending = sortServerList(
      {
        key: 'missingKey',
        isDescending: true
      },
      data
    );

    expect(resultsDescending).toStrictEqual(data);
  });
});
