import React from 'react'
import axios from 'axios'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mapStateToProps } from './serversContainer'
import ServerList from './Components/ServerList'
import ServerListItem from './Components/ServerListItem'
import * as serversActions from './serversActions'
import { ASYNC_ACTION_END, ASYNC_ACTION_START } from '../../../constants/actions'
import serverListResponse from '../../../mockResponses/severListResponse'
import serversReducer from './serversReducer'

const mockStore = configureStore([thunk])

describe('ServerList page', () => {

    describe('serverList container component', () => {

        describe('mapStateToProps', () => {
            it('should mapStateToProps correctly and add Id to server list items', () => {

                let serverReducer = {
                    servers: [
                        {
                            name: 'Thailand 1',
                            distance: 7500,
                            id: '123'
                        }
                    ]
                }

                const state = {
                    serversReducer: serverReducer
                }

                const componentProps = mapStateToProps(state)
                expect(componentProps.servers[0].id).toBeDefined()
            })

        })
    })

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
                axios.__set({ data: serverListResponse, status: 200 })
                await serversActions.fetchList()(store.dispatch)
                const actions = store.getActions()

                expect(actions).toContainEqual({ type: ASYNC_ACTION_START })
                expect(actions).toContainEqual({ type: serversActions.FETCH_LIST_SUCCESS, payload: serverListResponse })
                expect(actions).toContainEqual({ type: ASYNC_ACTION_END })
            })

            it('it should dispatch an error action on unsuccessful response', async () => {
                axios.__set({ data: 'Unauthorized', status: 401 })
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
