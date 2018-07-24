import { connect } from 'react-redux';
import { IApp } from 'types';
import Button from './ErrorLabel';

const label = `Ohhhh no! Something just went wrong :(`;

const mapStateToProps = (state: IApp) => ({
  isVisible: state.serverList.error,
  label
});
export default connect(mapStateToProps)(Button);
