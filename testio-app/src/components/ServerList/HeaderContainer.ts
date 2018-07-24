import { connect } from 'react-redux';
import Row from './Row';

const distance = 'Distance'.toLocaleUpperCase();
const name = 'name'.toLocaleUpperCase();
const isHeader = true;

const mapStateToProps = () => ({
  distance,
  isHeader,
  name
});

export default connect(mapStateToProps)(Row);
