import { getIds } from 'common/store/modules/server-list/selectors';
import { IAppState } from 'common/store/types';
import { connect } from 'react-redux';
import ServerList from './component';

const mapStateToProps = (state: IAppState) => ({
  ids: getIds(state)
});

export default connect(mapStateToProps)(ServerList);
