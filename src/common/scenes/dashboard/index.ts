import Loading from 'common/components/loading/component';
import { hot } from 'react-hot-loader';
import * as Loadable from 'react-loadable';
import { OptionsWithoutRender } from 'react-loadable';
import { connect } from 'react-redux';
import { fetchList } from '../../store/modules/server-list/actions';

const loadableDashboardScene = hot(module)(
  Loadable({
    loader: () => import(/* webpackChunkName: 'dashboard' */ './component'),
    loading: Loading
  } as OptionsWithoutRender<{}>)
);

export default connect(
  null,
  { onDidMount: fetchList }
)(loadableDashboardScene);
