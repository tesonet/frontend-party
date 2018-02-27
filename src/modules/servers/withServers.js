import { compose, lifecycle, withState } from 'recompose';
import { fetchServers } from '../../api';

export default getToken =>
  compose(
    withState('servers', 'setServers', []),
    withState('loading', 'setLoading', false),
    lifecycle({
      async componentDidMount() {
        this.props.setLoading(true);
        const servers = await fetchServers(getToken(this.props));
        this.props.setServers(servers);
        setTimeout(() => {
          // timeout for loader to be visible
          this.props.setLoading(false);
        }, 1000);
      },
    }),
  );
