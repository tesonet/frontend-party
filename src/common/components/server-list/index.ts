import { connect } from 'react-redux';
import ServerList from './component';

const mapStateToProps = () => ({
  ids: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => x.toString())
});

export default connect(mapStateToProps)(ServerList);
