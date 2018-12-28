import React from 'react';

const tableItem = (props) => (
    <tr>
        <td className="table-results-left"> {props.titleName}</td>
        <td className="table-results-right">{props.titleDistance} Km</td> 
    </tr>    
);

export default tableItem;