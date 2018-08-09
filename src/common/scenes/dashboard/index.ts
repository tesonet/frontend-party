import Loading from 'common/components/loading/component';
import { hot } from 'react-hot-loader';
import * as Loadable from 'react-loadable';
import { OptionsWithoutRender } from 'react-loadable';

export default hot(module)(
  Loadable({
    loader: () => import(/* webpackChunkName: 'dashboard' */ './component'),
    loading: Loading
  } as OptionsWithoutRender<{}>)
);
