import LoginReducer from '../../reducers/LoginReducer';
import ServersReducer from '../../reducers/ServersReducer';
import * as types from '../../actions/Actions';

describe('Login Reducer works as expected', () => {

  let initialState = {
    userAuthenticated: false,
    pending: false,
    errorMessage: false,
    token: false
  }

  it('should not affect state', () => {
    expect(LoginReducer(initialState, { type: 'IRRELEVANT_ACTION' })).toEqual(initialState);
  })

  describe('sending login request',() => {

    const requestAction = {
      type: `${types.LOGIN_REQUEST}_PENDING`
    }

    it('should set state pending:true',() => {
      expect(LoginReducer(initialState, requestAction)).toEqual({
        ...initialState,
        pending: true
      })
    })
  })

  describe('fulfilling login request',() => {
    const fullfilledAction = {
      type: `${types.LOGIN_REQUEST}_FULFILLED`,
      payload: {
        data: {
          token: 'token'
        },
      },
    }

    it('should receive token',() => {
      expect(LoginReducer(initialState, fullfilledAction)).toEqual({
        ...initialState,
        token: fullfilledAction.payload.data.token,
        userAuthenticated: true
      })
    })
  })

  describe('error whilst sending login request',() => {
    const errAction = {
      type: `${types.LOGIN_REQUEST}_REJECTED`
    }

    it('should set error message', () => {
      expect(LoginReducer(initialState, errAction)).toEqual({
        ...initialState,
        errorMessage: 'Username and/or password invalid'
      })
    })
  })

  it('can handle LOGOUT', () => {
    expect(LoginReducer({...initialState, token: 'token'}, { type: 'LOGOUT' })).toEqual(initialState);
  });

});

describe('Servers reducer works as expected',() => {

  let initialState = {
    pending: false,
    errorMessage: false,
    servers: []
  }

  it('should not affect state', () => {
    expect(ServersReducer(initialState, { type: 'IRRELEVANT_ACTION' })).toEqual(initialState);
  })

  describe('sending fetch servers request',() => {

    const requestAction = {
      type: `${types.FETCH_SERVERS}_PENDING`
    }

    it('should set state pending:true',() => {
      expect(ServersReducer(initialState, requestAction)).toEqual({
        ...initialState,
        pending: true
      })
    })
  })

  describe('fulfilling fetch servers request',() => {
    const fullfilledAction = {
      type: `${types.FETCH_SERVERS}_FULFILLED`,
      payload: {
        data: {
          servers: [{
            name: 'server',
            distance: 'distance'
          }]
        },
      },
    }

    it('should receive server list',() => {
      expect(ServersReducer(initialState, fullfilledAction)).toEqual({
        ...initialState,
        servers: fullfilledAction.payload.data
      })
    })
  })

  describe('error whilst fetching servers',() => {
    const errAction = {
      type: `${types.FETCH_SERVERS}_REJECTED`
    }

    it('should set error message', () => {
      expect(ServersReducer(initialState, errAction)).toEqual({
        ...initialState,
        errorMessage: 'Something went wrong while fetching the servers list, please try again later'
      })
    })
  })

  it('can handle LOGOUT', () => {
    expect(ServersReducer({...initialState, servers: [
      {
      name: 'server',
      distance: 'distance'
    }
  ]}, { type: 'LOGOUT' })).toEqual(initialState);
  });

})
