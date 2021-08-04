import { renderHook } from '@testing-library/react-hooks';

import withReduxStore from '@Common/tests/withReduxStore';

import useUserAuthentication from '../useUserAuthentication';
import useLocalStorage from '../useLocalStorage';

jest.mock('../useLocalStorage');

describe('useUserAuthentication', () => {
  it('should set user as authenticated if token is available', () => {
    const token = '465456A';
    useLocalStorage.mockImplementation(() => ({
      value: token,
    }));

    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => withReduxStore(children, { form: 'test' }),
    });

    expect(result.current.isAuthenticated).toStrictEqual(true);
  });
});
