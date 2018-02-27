import { compose, lifecycle, withState } from 'recompose';
import { prop } from 'ramda';
import { fetchServers } from '../../api';
import { withToken } from '../login';

export default compose(
  withToken,
  withState('servers', 'setServers', []),
  withState('loading', 'setLoading', false),
  lifecycle({
    async componentDidMount() {
      this.props.setLoading(true);
      const servers = await fetchServers(prop('token')(this.props));
      this.props.setServers(servers);
      setTimeout(() => {
        // timeout for loader to be visible
        this.props.setLoading(false);
      }, 1000);
    },
  }),
);
