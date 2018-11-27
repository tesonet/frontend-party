import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Sort from '../helpers/Sort';
import { Table } from 'reactstrap';
import * as authActions from "../../actions/auth";
import * as dataActions from "../../actions/getData";
import Modal from '../helpers/Modal';
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
            errors: [],
            field: 'index'
        };
        this.sortBy = this.sortBy.bind(this);
        this.modal = React.createRef();
    }

    componentDidMount() {
        this.props.getData().then(
            () => {
                let data = this.props.data;
                for (const key in data) {
                    data[key]['index'] = parseInt(key) + 1;
                }
                this.setState({ data: data, loading: false });
                this.sortBy('init', true)
            }
        ).catch(
            error => this.setState({ errors: error, loading: false })
        );
        this.setTableHeight();
        console.log("componentDidMount", this);
    }

    setTableHeight() {
        let screenHeight = window.innerHeight;
        let headerHeight = document.getElementById('tes-header').clientHeight;
        let theadHeight = document.getElementById('tes-thead').clientHeight;
        document.getElementById('tes-tbody').style.height = screenHeight - headerHeight - theadHeight + 'px';
    }

    sortBy(field, order) {
        let sortedData;
        field = field.toUpperCase();
        switch (field) {
            case 'NAME':
                sortedData = this.props.data.sort(function (a, b) {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'DISTANCE':
                sortedData = this.props.data.sort(function (a, b) {
                    return a.distance - b.distance;
                });
                break;
            case 'INIT':
                sortedData = this.props.data.sort(function (a, b) {
                    if (a.distance > b.distance) return 1;
                    if (a.distance < b.distance) return -1;

                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                });
                this.triggerModal('Only on init data is sorted by "DISTANCE" and "NAME" ASC.');
                break;
            default:
                sortedData = this.props.data.sort(function (a, b) {
                    return a.index - b.index;
                });
                break;
        }

        this.setState({
            data: order ? sortedData : sortedData.reverse()
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
        this.modal.current.showModal(text);
    }

    render() {
        const { data } = this.props;
        const { loading } = this.state;
        return (
            <div className="tes-home">
                <Header />
                <div className={loading ? 'loading' : ''} id="table-wrapper">
                    <ClipLoader
                        className={override}
                        sizeUnit={"px"}
                        size={80}
                        color={'#123abc'}
                        loading={!!loading}
                    />
                    <Modal ref={this.modal} />
                    <div id="table-scroll">
                        <Table responsive>
                            <thead id="tes-thead">
                                <tr className="bg-light font-weight-normal">
                                    <th className="w-25"><Sort sortBy={this.sortBy} /></th>
                                    <th>SERVER</th>
                                    <th className="text-lg-right">DISTANCE</th>
                                </tr>
                            </thead>
                            <tbody id="tes-tbody">
                                {this.renderProducts(data)}
                            </tbody>
                        </Table>
                    </div>
                </div>
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
