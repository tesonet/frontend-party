import React, { Component } from 'react';
import BEM from '../components/BEM';

function  prepareRow(cols, row, key) {
    let colValues = [];

    cols.map((col)=>{
        colValues.push({
            key: col.key,
            title: row[col.key],
            postfix: col.postfix
        })
    })

    return (<div className="table__row table__row--body" key={key}>
    {colValues.map((col, i)=> prepareCol(col, i) )}
    </div>)
}

function prepareCol(col, key) {
    let classList = ["table__cell"]

    classList.push("table__cell--"+col.key);

    if (col.sort) {
        classList.push("table__cell--sort");
    }
    
    return (<div key={key} data-sort={col.sort ? col.key : null} data-sort-direction='ascs'  className={classList.join(' ')}>
        {col.title} {col.postfix ? col.postfix : ''}
        </div>)
}

class SmartTable extends Component {
    render() {
        return (<BEM name="smart-table">
            <div className="table">
                <div onClick={this.props.sort} className="table__row table__row--header">
                {this.props.cols.map((col, i)=> prepareCol(col, i) )}
                </div>

                {this.props.rows.map((row, i)=> prepareRow(this.props.cols, row, i) )}
            </div>
        </BEM>);
    }
}

export default SmartTable;