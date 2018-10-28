import React from 'react'
import axiosMock from 'axios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as serversActions from './serversActions'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../../constants/actions'
import serverListResponse from '../../../mockResponses/severListResponse'
import loginResponse from '../../../mockResponses/loginResponse'

const mockStore = configureStore([thunk])

describe('ServerList page', () => {

    describe('ServerLis actions', () => {

        describe('Fetch server list action', () => {

            let store = null

            beforeEach(() => {
                store = mockStore()
            })

            afterEach(() => {
                store.clearActions()
            })

            it('it should fetch and dispatch server list otherwise dispatch error message', async () => {

                axiosMock.get.mockImplementationOnce(() =>
                  Promise.resolve({ data: serverListResponse, status: 200 })
                )

                await serversActions.fetchList()(store.dispatch)
                const actions = store.getActions()

                expect(actions).toContainEqual({ type: ASYNC_ACTION_START })
                expect(actions).toContainEqual({ type: serversActions.FETCH_LIST_SUCCESS, payload: serverListResponse })
                expect(actions).toContainEqual({ type: ASYNC_ACTION_END })
            })

            it('it should dispatch an error action on unsuccessful response', async () => {

                axiosMock.get.mockImplementationOnce(() =>
                  Promise.resolve({ data: 'Unauthorized', status: 401 })
                )

                await serversActions.fetchList()(store.dispatch)
                const actions = store.getActions()

                expect(actions).toContainEqual({ type: ASYNC_ACTION_START })
                expect(actions).toContainEqual({
                    type: serversActions.FETCH_LIST_ERROR,
                    payload: { data: 'Unauthorized', status: 401 }
                })
                expect(actions).toContainEqual({ type: ASYNC_ACTION_END })
            })
        })
    })
})
