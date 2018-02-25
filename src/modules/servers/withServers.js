import { compose, lifecycle, withState } from 'recompose';
import { fetchServers } from '../../api';

export default getToken =>
  compose(
    withState('servers', 'setServers', []),
    lifecycle({
      async componentDidMount() {
        const servers = await fetchServers(getToken(this.props));
        this.props.setServers(servers);
      },
    }),
  );
