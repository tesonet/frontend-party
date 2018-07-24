import { connect } from 'react-redux';
import { IApp } from 'types';
import Button from './ErrorLabel';

const label = `Hmm. We're having trouble login in. Please check if login and password is correct`;

const mapStateToProps = (state: IApp) => ({
  isVisible: state.form.error,
  label
});
export default connect(mapStateToProps)(Button);
