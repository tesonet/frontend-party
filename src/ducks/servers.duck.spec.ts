import { selectors } from './servers.duck';

describe('Servers duck', () => {
    describe('getSortedServers', () => {
        const formState = (key, order) => ({
            servers: {
                serverList: [
                    { name: 'b', distance: 3 },
                    { name: 'c', distance: 1 },
                    { name: 'a', distance: 2 },
                ],
                sortParams: {
                    key,
                    order,
                },
            },
        });

        test('should return list ordered by provided key/order', () => {
            expect(selectors.getSortedServers(formState('name', 'desc'))).toEqual([
                { name: 'a', distance: 2 },
                { name: 'b', distance: 3 },
                { name: 'c', distance: 1 },
            ]);

            expect(selectors.getSortedServers(formState('distance', 'desc'))).toEqual([
                { name: 'c', distance: 1 },
                { name: 'a', distance: 2 },
                { name: 'b', distance: 3 },
            ]);

            expect(selectors.getSortedServers(formState('name', 'asc'))).toEqual([
                { name: 'c', distance: 1 },
                { name: 'b', distance: 3 },
                { name: 'a', distance: 2 },
            ]);

            expect(selectors.getSortedServers(formState('distance', 'asc'))).toEqual([
                { name: 'b', distance: 3 },
                { name: 'a', distance: 2 },
                { name: 'c', distance: 1 },
            ]);
        });
    });
});
