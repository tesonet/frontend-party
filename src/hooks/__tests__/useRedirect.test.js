import { renderHook, act } from '@testing-library/react-hooks';

import reactRouterDom from 'react-router-dom';
import useRedirect from '../useRedirect';
import ROUTES from '../../config/routes';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

describe('useRedirect', () => {
  it.each([
    ['should redirect to main page', (current) => current.toMain(), ROUTES.MAIN],
    ['should redirect to login page', (current) => current.toLogin(), ROUTES.LOGIN],
    ['should redirect to server list page', (current) => current.toServerList(), ROUTES.SERVER_LIST],
  ])('%s', (description, callRedirectAction, expectedRoute) => {
    const historyPush = jest.fn();
    reactRouterDom.useHistory.mockImplementation(() => ({
      push: historyPush,
    }));
    const { result } = renderHook(() => useRedirect());

    act(() => {
      callRedirectAction(result.current);
    });

    expect(historyPush).toBeCalledWith(expectedRoute);
  });
});
