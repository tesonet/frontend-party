import { getServerByUid } from 'features/serverList/selectors';
import { connect } from 'react-redux';
import { IApp } from 'types';
import Row from './Row';

const mapStateToProps = (state: IApp, ownProps: { uid: string }) => {
  const { distance, name } = getServerByUid(state, ownProps);

  return {
    distance: distance.toString(),
    name
  };
};

export default connect(mapStateToProps)(Row);
