import { connect } from 'react-redux';
import { IAppState } from '../../store/types';
import Server from './component';

interface IOwnProps {
  id: string;
}

const mapStateToProps = (state: IAppState, ownProps: IOwnProps) => {
  const server = { location: 'canada', distance: '53km' };

  return {
    location: server.location,
    distance: server.distance
  };
};

export default connect(mapStateToProps)(Server);
