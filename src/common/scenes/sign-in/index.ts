import Loading from 'common/components/loading/component';
import { hot } from 'react-hot-loader';
import * as Loadable from 'react-loadable';
import { OptionsWithoutRender } from 'react-loadable';
import { connect } from 'react-redux';
import { maybeRedirect } from '../../store/modules/sign-in/actions';

const loadableSignUpScene = hot(module)(
  Loadable({
    loader: () => import(/* webpackChunkName: 'sign-up' */ './component'),
    loading: Loading
  } as OptionsWithoutRender<{}>)
);

export default connect(
  null,
  { onDidMount: maybeRedirect }
)(loadableSignUpScene);
