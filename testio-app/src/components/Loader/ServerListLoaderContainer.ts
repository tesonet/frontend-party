import { connect } from 'react-redux';
import { IApp } from 'types';
import { LOADER_COLOR, LOADER_SIZE } from './Loader';
import ServerListLoader from './ServerListLoader';

const color = LOADER_COLOR.BLACK;
const size = LOADER_SIZE.MEDIUM;

const mapStateToProps = (state: IApp) => ({
  color,
  isVisible: state.serverList.isLoading,
  size
});

export default connect(mapStateToProps)(ServerListLoader);
