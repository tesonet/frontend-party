import { addByUid, addUids, updateSimpleValue } from './createReducer';

const filledState = {
  'uid-2': {
    name: 'Latvia #56',
    uid: 'uid-2'
  },
  'uid-3': {
    name: 'Lithuania #1',
    uid: 'uid-3'
  }
};
const byIdActionPayload = [
  {
    name: 'Latvia #56',
    uid: 'uid-0'
  },
  {
    name: 'Lithuania #1',
    uid: 'uid-1'
  }
];

const createTestAction = (payload: any) => ({
  payload,
  type: 'ACTION_PAYLOAD'
});

describe('createReducer', () => {
  describe('#addUids', () => {
    it('should add new uid to empty array', () => {
      const result = addUids([], createTestAction(byIdActionPayload));
      expect(result).toEqual(['uid-0', 'uid-1']);
    });

    it('should add new uid to uids list end', () => {
      const result = addUids(
        ['uid-2', 'uid-3'],
        createTestAction(byIdActionPayload)
      );
      expect(result).toEqual(['uid-2', 'uid-3', 'uid-0', 'uid-1']);
    });
  });

  describe('#addByUid', () => {
    it('should create new object with key as uid ', () => {
      const result = addByUid([], createTestAction(byIdActionPayload));
      expect(result).toEqual({
        'uid-0': {
          name: 'Latvia #56',
          uid: 'uid-0'
        },
        'uid-1': {
          name: 'Lithuania #1',
          uid: 'uid-1'
        }
      });
    });

    it('should update state with new uids ', () => {
      const result = addByUid(filledState, createTestAction(byIdActionPayload));
      expect(result).toEqual({
        ...filledState,
        'uid-0': {
          name: 'Latvia #56',
          uid: 'uid-0'
        },
        'uid-1': {
          name: 'Lithuania #1',
          uid: 'uid-1'
        }
      });
    });
  });

  describe('#updateSimpleValue', () => {
    it('should update state with primitives value ', () => {
      const result = updateSimpleValue(false, createTestAction(true));
      expect(result).toEqual(true);
    });
  });
});
