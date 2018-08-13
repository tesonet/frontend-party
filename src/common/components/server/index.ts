import { withVisibility } from 'common/hocs/withVisibility';
import { connect } from 'react-redux';
import { IAppState } from '../../store/types';
import Server from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: IAppState, ownProps: IOwnProps) => {
  const server = state.serverList.byId[ownProps.id];

  if (!server) {
    return {
      isVisible: false
    };
  }

  return {
    isVisible: true,
    name: server.name,
    distance: `${server.distance} km`
  };
};

export default connect(mapStateToProps)(withVisibility(Server));
