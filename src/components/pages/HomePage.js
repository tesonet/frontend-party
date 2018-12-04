import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Sort from '../helpers/Sort';
import { Table } from 'reactstrap';
import * as authActions from "../../actions/auth";
import * as dataActions from "../../actions/getData";
import Modal from '../helpers/Modal';
import Offline from '../helpers/Offline';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    position: absolute;
    left: 47%;
    top: 45%;
    z-index: 1;
`;

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
            errors: []
        };
        this.sortBy = this.sortBy.bind(this);
        this.modalComponent = React.createRef();
        this.sortComponent = React.createRef();
    }

    componentDidMount() {
        this.props.getData().then(
            () => {
                let data = this.props.data;
                for (const key in data) {
                    data[key]['index'] = parseInt(key) + 1;
                }
                this.setState({ data: data, loading: false });
                this.sortComponent.current.sort('init', true)
                this.triggerModal('Only on init data is sorted by "DISTANCE" and "NAME" ASC.');
            }
        ).catch(
            error => this.setState({ errors: error, loading: false })
        );
    }

    sortBy(sortedData) {
        this.setState({
            data: sortedData
        });

    }

    renderProducts(data) {
        return Object.values(data).map((d, i) => {
            return (
                <tr key={i}>
                    <th scope="row" className="w-25">{d.index}</th>
                    <td>{d.name}</td>
                    <td className="text-lg-right">{d.distance} km</td>
                </tr>
            );
        })
    }

    triggerModal(text) {
        this.modalComponent.current.showModal(text);
    }

    render() {
        const { data } = this.props;
        const { loading } = this.state;
        return (
            <div id="tes-home" className={loading ? 'p-absolute loading' : 'p-absolute'}>
                <Offline text="App has gone offline! Last available data will be loaded!"/>
                <Header />
                <ClipLoader
                    className={override}
                    sizeUnit={"px"}
                    size={80}
                    color={'#123abc'}
                    loading={!!loading}
                />
                <Modal ref={this.modalComponent} />
                <Table responsive>
                    <thead id="tes-thead">
                        <tr className="bg-light font-weight-normal">
                            <th className="w-25">
                                <Sort ref={this.sortComponent} data={data} sortBy={this.sortBy} />
                            </th>
                            <th>SERVER</th>
                            <th className="text-lg-right">DISTANCE</th>
                        </tr>
                    </thead>
                    <tbody id="tes-tbody" className="">
                        {this.renderProducts(data)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
        data: state.data
    }
}

export default connect(mapStateToProps, { logout: authActions.logout, getData: dataActions.getData })(HomePage);
