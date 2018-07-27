import { connect } from 'react-redux';
import { IApp } from 'types';
import { LOADER_COLOR, LOADER_SIZE } from './Loader';
import LoginPageLoader from './LoginPageLoader';

const color = LOADER_COLOR.BLACK;
const size = LOADER_SIZE.MEDIUM;

const mapStateToProps = (state: IApp) => ({
  color,
  isVisible: state.form.isLoading,
  size
});

export default connect(mapStateToProps)(LoginPageLoader);
