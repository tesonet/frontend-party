import { connect } from 'react-redux';
import Row from './Row';

const distance = 'Distance'
const name = 'name'

const mapStateToProps = () => ({
    distance,
    name,
});

const mapDispatchToProps = (dispatch: any) => ({
    // tslint:disable-next-line:no-console
    distanceOnClick: () => console.log('name'),
    // tslint:disable-next-line:no-console
    nameOnClick: () => console.log('name')
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);
