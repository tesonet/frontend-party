import { addByUid, addUids } from './createReducer';

const action = {
    payload: [
        {
            'name': 'Latvia #56',
            'uid': '0'
        },
        {
            'name': 'Lithuania #1',
            'uid': '1'
        },
    ],
    type: 'ACTION_PAYLOAD'
}

describe('createReducer', () => {
    describe('#addUids', () => {
        it('should add new uid to empty array', () => {
            const result = addUids([], action);
            expect(result).toEqual([ '0', '1' ]);
        });

        it('should add new id to uids list end', () => {
            const result = addUids(['-2', '-1'], action);
            expect(result).toEqual(['-2', '-1','0', '1' ]);
        });
    });

    // TODO: revisit later
    describe('#addByUid', () => {
        it('should create new object with key as uid ', () => {
            const result = addByUid([], action);
            expect(result).toEqual({
                0: {
                    'name': 'Latvia #56',
                    'uid': '0'
                },
                1: {
                    'name': 'Lithuania #1',
                    'uid': '1'
                },
            });
        });

        it('should update state with new uids ', () => {
            const result = addByUid({
                2: {
                    'name': 'Latvia #56',
                    'uid': '2'
                },
                3: {
                    'name': 'Lithuania #1',
                    'uid': '3'
                },
            }, action);
            expect(result).toEqual({
                2: {
                    'name': 'Latvia #56',
                    'uid': '2'
                },
                3: {
                    'name': 'Lithuania #1',
                    'uid': '3'
                },
                0: {
                    'name': 'Latvia #56',
                    'uid': '0'
                },
                1: {
                    'name': 'Lithuania #1',
                    'uid': '1'
                }
            });
        });
    });
});
