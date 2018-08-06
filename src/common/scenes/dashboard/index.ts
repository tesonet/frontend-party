import Loading from 'common/components/loading/component';
import * as Loadable from 'react-loadable';
import { OptionsWithoutRender } from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'dashboard' */ './component'),
  loading: Loading
} as OptionsWithoutRender<{}>);
