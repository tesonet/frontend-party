/* eslint-disable import/prefer-default-export */

export const createLoadingSelector = (actions: [any]) => (state: any) => {
  const strippedActions = actions.map((action) => {
    const matches = /(.*)_(REQUEST)/.exec(action);
    if (!matches) {
      throw new Error('Invalid action type. Pass action types with following signature: *_REQUEST');
    }
    return matches[1];
  });
  return strippedActions.some((action) => state.loading[action]);
};
