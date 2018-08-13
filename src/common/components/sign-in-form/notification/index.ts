import { withVisibility } from 'common/hocs/withVisibility';
import { Status } from 'common/store/modules/sign-in-form/types';
import { IAppState } from 'common/store/types';
import { connect } from 'react-redux';
import Notification from './component';

const mapStateToProps = (state: IAppState) => ({
  isVisible: state.signInForm.status === Status.Error,
  children: state.signInForm.error
});

export default connect(mapStateToProps)(withVisibility(Notification));
