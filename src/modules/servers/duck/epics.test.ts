import { expect } from 'chai';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';

import {
  createMockAxiosResponse,
  mapArrayToAxiosObject,
} from '../../../common/AxiosTestkit';
import { Dependencies } from '../../../redux/dependencies';

import { serverActions } from './actions';
import { serverEpics } from './epics';
import { Server } from './model';
import { ServerService } from './service';

const response: Server[] = [
  { name: 'Test #1', distance: 1 },
  { name: 'Test #2', distance: 2 },
];

const serverService: ServerService = {
  getServers: () => of(createMockAxiosResponse({ data: { ...response } })),
};

describe('server epics', () => {
  it('getAll should return server list', done => {
    const expected = serverActions.getAllDone(mapArrayToAxiosObject(response));
    const action$ = ActionsObservable.of(serverActions.getAll());

    serverEpics
      .getAll(action$, null, { serverService } as Partial<Dependencies>)
      .subscribe(actual => {
        expect(actual).to.deep.eq(expected);
        done();
      });
  });
});
