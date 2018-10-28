import React from 'react'
import axios from 'axios'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mapStateToProps } from './authContainer'
import * as authActions from './authActions'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../constants/actions'
import loginResponse from '../../mockResponses/loginResponse'
import AuthPage from './Components/AuthPage'

const mockStore = configureStore([thunk])

describe('Authorization page', () => {

    describe('AuthPage container', () => {

        describe('mapStateToProps', () => {

            it('correctly maps state to props', () => {

                const state = {
                    authReducer: {
                        withAuth: false,
                        loginError: false
                    }
                }

                const componentProps = mapStateToProps(state)
                expect(state.authReducer).toEqual(componentProps)
            })
        })

        describe('AuthPage component', () => {
            it('renders correctly', () => {
                const tree = renderer
                  .create(
                    <AuthPage
                      withAuth={false}
                      loginError={false}
                      login={() => {
                      }}
                      clearLoginError={() => {
                      }}
                    />
                  )
                  .toJSON()
                expect(tree).toMatchSnapshot()
            })
        })
    })

    describe('Auth actions', () => {

        describe('Login action', () => {

            let store = null

            beforeEach(() => {
                store = mockStore()
            })

            afterEach(() => {
                store.clearActions()
            })

            it('it should fetch and dispatch server list otherwise dispatch error message', async () => {
                axios.__set({ data: loginResponse, status: 200 })
                await authActions.login()(store.dispatch)
                const actions = store.getActions()

                expect(actions).toContainEqual({ type: ASYNC_ACTION_START })
                expect(actions).toContainEqual({ type: authActions.LOGIN_START })
                expect(actions).toContainEqual({ type: authActions.LOGIN_SUCCESS, payload: loginResponse.token })
                expect(actions).toContainEqual({ type: ASYNC_ACTION_END })
            })

            it('it should dispatch an error action on unsuccessful login', async () => {
                axios.__set({ data: 'Unauthorized', status: 401 })
                await authActions.login()(store.dispatch)
                const actions = store.getActions()

                expect(actions).toContainEqual({ type: ASYNC_ACTION_START })
                expect(actions).toContainEqual({
                    type: authActions.LOGIN_ERROR,
                    payload: { data: 'Unauthorized', status: 401 }
                })
                expect(actions).toContainEqual({ type: ASYNC_ACTION_END })
            })
        })
    })
})