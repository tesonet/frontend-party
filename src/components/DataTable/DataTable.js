import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import InputBoxWithIcon from "./../InputBoxWithIcon/InputBoxWithIcon.js";
import Loader from "./../Loader/Loader.js";
import classes from "./DataTable.scss";
import iconSearch from "./../../assets/ico-search.png";

class DataTable extends Component {
	searchBoxRef = React.createRef();
	initializeSorting(props, init) {
		if (props.allData && props.allData.data && props.allData.data.length > 0) {
			const newSortKey = Object.keys(props.allData.data[0])[0];
			if (newSortKey) {
				init({
					currentKey: newSortKey,
					availableSortKeys: [{ sortKey: newSortKey, isAscending: true }],
					searchValue: "",
				});
			}
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			currentKey: null,
			availableSortKeys: [],
			searchValue: "",
		};
		this.initializeSorting(props, newState => {
			this.state = newState;
		});
	}
	handleHeaderClick = newSortKey => {
		const availableSortKeys = this.state.availableSortKeys;
		const keyIndex = this.state.availableSortKeys.findIndex(sortData => sortData.sortKey === newSortKey);
		if (keyIndex !== -1) {
			const availableSortKeysUpdated = [...this.state.availableSortKeys];
			const oldSortData = availableSortKeysUpdated[keyIndex];
			availableSortKeysUpdated[keyIndex] = { ...oldSortData, isAscending: !oldSortData.isAscending };
			this.setState({
				currentKey: newSortKey,
				availableSortKeys: availableSortKeysUpdated,
			});
		} else {
			this.setState({
				currentKey: newSortKey,
				availableSortKeys: [...this.state.availableSortKeys, { sortKey: newSortKey, isAscending: true }],
			});
		}
	};
	handleSearchChange = value => {
		this.setState({
			searchValue: value,
		});
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentKey === null) {
			this.initializeSorting(this.props, newState => {
				this.setState(newState);
			});
		}
	}
	componentDidMount() {
		if (this.searchBoxRef && this.searchBoxRef.current) {
			this.searchBoxRef.current.focus();
		}
	}
	render() {
		let headersUI = <tr>{this.props.headers.map(header => <th key={header}>{header}</th>)}</tr>;
		let dataRowsUI, loaderUI;
		if (this.props.allData && this.props.allData.data && this.state.currentKey) {
			const dataKeys = Object.keys(this.props.allData.data[0]);
			headersUI = (
				<tr>
					{dataKeys.map((key, index) => {
						let header = this.props.headers[index];
						//isfiltruojam null ir undefined
						if (![header].join()) header = key;
						return (
							<th key={key} onClick={this.handleHeaderClick.bind(this, key)}>
								{header} <i className="fas fa-sort" />
							</th>
						);
					})}
				</tr>
			);

			const isAscending = this.state.availableSortKeys.find(sortData => sortData.sortKey === this.state.currentKey).isAscending;
			const order = isAscending ? 1 : -1;

			dataRowsUI = this.props.allData.data
				.filter(dataRow => {
					return Object.values(dataRow).some(value =>
						String(value)
							.toLowerCase()
							.includes(this.state.searchValue.toLowerCase())
					);
				})
				.sort((dataRowA, dataRowB) => {
					if (dataRowA[this.state.currentKey] > dataRowB[this.state.currentKey]) {
						return 1 * order;
					} else if (dataRowA[this.state.currentKey] < dataRowB[this.state.currentKey]) {
						return -1 * order;
					} else {
						return 0;
					}
				})
				.map((dataRow, index) => {
					const columns = [];

					for (const [index, value] of Object.values(dataRow).entries()) {
						columns.push(<td key={index}>{value}</td>);
					}

					return <tr key={index}>{columns}</tr>;
				});
		} else if (this.props.allData) {
			if (this.props.allData.isFetching) {
				loaderUI = <Loader />;
			} else if (this.props.allData.error) {
				dataRowsUI = (
					<tr>
						<td colSpan={this.props.headers.length} className="text-center text-danger">
							{this.props.allData.error.message}
						</td>
					</tr>
				);
			}
		}

		return (
			<Fragment>
				{loaderUI}
				<div className="pb-1 px-1 text-right d-flex justify-content-end">
					<InputBoxWithIcon
						value={this.state.searchValue}
						onChange={this.handleSearchChange}
						icon={iconSearch}
						placeholder="Search..."
						type="search"
						inputClass="col-12 col-sm-4 col-xl-3"
						inputRef={this.searchBoxRef}
					/>
				</div>
				<table className={`${classes.DataTable} table flex-grow-1`}>
					<thead>{headersUI}</thead>
					<tbody>{dataRowsUI}</tbody>
				</table>
			</Fragment>
		);
	}
}

export default DataTable;

DataTable.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string),
};

DataTable.defaultProps = {
	headers: [],
};
