import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { push } from 'connected-react-router';

const Empty = () => null;

export default compose(
  connect(null, { navigate: push }),
  lifecycle({
    componentDidMount() {
      this.props.navigate(this.props.to);
    },
  }),
)(Empty);
