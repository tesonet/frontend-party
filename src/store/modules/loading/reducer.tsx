export const DEFAULT_STATE = {};

const loading = (state: any = DEFAULT_STATE, action: any) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions - ignore
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  return {
    ...state,
    // Store whether a request is happening at the moment
    [requestName]: requestState === 'REQUEST',
  };
};

export default loading;
