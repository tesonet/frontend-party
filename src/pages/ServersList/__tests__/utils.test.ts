import {compareByDistanceAndName, mapTableRows} from '../utils';

describe('utils.ts', () => {
	describe('mapTableRows', () => {
		it('should return correct mapped server', () => {
			const server = {name: 'A', distance: '1'};
			const result = mapTableRows(server);
			expect(result).toEqual({
				...server,
				key: `${server.name} ${server.distance}`,
				distance: `${server.distance} km`,
			})
		});
	});

	describe('compareByDistanceAndName', () => {
		it('should return -1 if serverA distance is lower than serverB', () => {
			const result = compareByDistanceAndName(
				{name: 'A', distance: '1'},
				{name: 'B', distance: '2'},
			);
			expect(result).toBe(-1);
		});

		it('should ignore alphabetical order if distance is lower', () => {
			const result = compareByDistanceAndName(
				{name: 'C', distance: '1'},
				{name: 'A', distance: '2'},
			);
			expect(result).toBe(-1);
		});

		it('should return bigger distance server', () => {
			const result = compareByDistanceAndName(
				{name: 'A', distance: '4'},
				{name: 'C', distance: '1'},
			);
			expect(result).toBe(3);
		});

		it('should return alphabetically lower server if distance is same', () => {
			const result = compareByDistanceAndName(
				{name: 'D', distance: '4'},
				{name: 'C', distance: '4'},
			);
			expect(result).toBe(1);
		});

		it('should return zero if servers are equal', () => {
			const result = compareByDistanceAndName(
				{name: 'D', distance: '4'},
				{name: 'D', distance: '4'},
			);
			expect(result).toBe(0);
		});
	});
});
