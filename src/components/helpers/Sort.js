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
        this.props.sortBy(this.state.field, !this.state.sortASC);
    }

    sort(field) {
        this.setState({
            field: field
        })
        this.props.sortBy(field, this.state.sortASC);
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
    sortBy: PropTypes.func.isRequired
}

export default Sort;