import { Action } from 'redux';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';

import { Dependencies } from './dependencies';
import { State } from './reducer';

type EpicType<T extends Action, R> = (
  action$: ActionsObservable<T>,
  state$: StateObservable<State>,
  dependencies: Partial<Dependencies>,
) => Observable<R>;

export { EpicType };
