import { createUid } from './uniqId';

it('should create unique identifiers', () => {
    const uniqId1 = createUid();
    const uniqId2 = createUid();

    expect(uniqId1).not.toEqual(uniqId2);
});
