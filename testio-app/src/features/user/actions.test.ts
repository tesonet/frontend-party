import { stringToBool } from './actions';

describe('user actions ', () => {
    describe('#stringToBool', () => {
        it('should return true then string is "1"', () => {
            const result = stringToBool('1');
            expect(result).toBe(true);
        });

        it('should return false then string is anything then "1"', () => {
            let result = stringToBool('0');
            expect(result).toBe(false);

            result = stringToBool('test');
            expect(result).toBe(false);
        });
    });
});
