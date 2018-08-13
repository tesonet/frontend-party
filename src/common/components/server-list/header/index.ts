import { setOrderBy } from 'common/store/modules/server-list/actions';
import { OrderBy } from 'common/store/modules/server-list/types';
import { connect } from 'react-redux';
import Header from './component';

const mapDispatchToProps = (dispatch: any) => ({
  onServerClick: () => dispatch(setOrderBy(OrderBy.Name)),
  onDistanceClick: () => dispatch(setOrderBy(OrderBy.Distance))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
