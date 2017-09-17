import { _do } from 'rxjs/operator/do';
import { delay } from 'rxjs/operator/delay';
import { filter } from 'rxjs/operator/filter';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { map } from 'rxjs/operator/map';

declare module 'rxjs/Observable' {
  /* tslint:disable interface-name */
  interface Observable<T> {
    do: typeof _do;
    delay: typeof delay;
    filter: typeof filter;
    mergeMap: typeof mergeMap;
    map: typeof map;
  }
  /* tslint:enable interface-name */
}
