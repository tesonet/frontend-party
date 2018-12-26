import * as React from 'react';
import './Table.scss';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: '',
      asc: false,
    };

    this.handleSort = this._handleSort.bind(this);
    this.formatCell = this._formatCell.bind(this);
  }

  _handleSort(sortColumn, sortable) {
    const { sortBy, asc } = this.state,
      { onSort } = this.props,
      isAscending = sortColumn === sortBy ? !asc : asc;

    if (!sortable) {
      return;
    }

    this.setState({
      sortBy: sortColumn,
      asc: isAscending,
    });
    onSort(sortColumn, isAscending);
  }

  _formatCell(value, formatType) {
    switch (formatType) {
      case 'append-unit':
        return `${value} km`;

      default:
        return value;
    }
  }

  render() {
    const { head, loading, body } = this.props;

    const cellWidth = `${100 / head.length}%`;

    const tableHead = (
      <div className="table__head list-group-item list-group-item-light">
        {head.map((item, key) => (
          <div
            key={key}
            onClick={() => this.handleSort(item.id, item.sortable)}
            className={`table__th ${item.cellClass}`}
            style={{ width: cellWidth }}
          >
            {item.label}
          </div>
        ))}
      </div>
    );

    const tableBody = (
      <div className="table__body">
        {body.map((row, rowKey) => (
          <div className="table__row list-group-item list-group-item-light" key={rowKey}>
            {head.map((cell, cellKey) => (
              <div key={cellKey} className={`table__td ${cell.cellClass}`} style={{ width: cellWidth }}>
                {this.formatCell(row[cell.id], cell.format)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );

    const loadingIcon = (
      loading && <div className="table__loading-icon">loading...</div>
    );

    return (
      <div className="table">
        {tableHead}
        {tableBody}
        {loadingIcon}
      </div>
    );
  }
}

