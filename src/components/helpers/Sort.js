import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

class Sort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            field: 'index',
            sortASC: true
        };
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSortState = this.toggleSortState.bind(this);
        this.sort = this.sort.bind(this);
    }

    toggleDropDown() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleSortState() {
        this.setState(prevState => ({
            sortASC: !prevState.sortASC
        }));
        this.sort(this.state.field, !this.state.sortASC);
    }

    sort(field, order) {
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
                break;
            default:
                sortedData = this.props.data.sort(function (a, b) {
                    return a.index - b.index;
                });
                break;
        }

        this.setState({
            field: field
        })

        this.props.sortBy(order ? sortedData : sortedData.reverse());
    }

    render() {
        const { field, sortASC } = this.state;
        return (
            <div className="d-inline-flex">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle className="btn-light btn-sm">
                        <FontAwesomeIcon icon={faSort} />
                        <span className="text-uppercase">
                            &nbsp;{field}
                        </span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.sort.bind(this, 'index')}>Index</DropdownItem>
                        <DropdownItem onClick={this.sort.bind(this, 'name')}>Name</DropdownItem>
                        <DropdownItem onClick={this.sort.bind(this, 'distance')}>Distance</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown toggle={this.toggleSortState}>
                    <DropdownToggle className="btn-light btn-sm">
                        <FontAwesomeIcon icon={faSort} />
                        <span className="text-uppercase">
                            &nbsp;{sortASC ? 'ASC' : 'DESC'}
                        </span>
                    </DropdownToggle>
                </Dropdown>
            </div >
        );
    }
}

Sort.propTypes = {
    sortBy: PropTypes.func.isRequired,
}

export default Sort;