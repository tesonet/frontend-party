import React from "react";
import { PropTypes } from "prop-types";
import { Table } from "reactstrap";
import "./List.scss";

const List = ({ headers, body }) => (
    <Table>
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th
                        style={{ textAlign: index > 0 && "right" }}
                        onClick={header.action}
                        key={index}
                    >
                        {header.name}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {body.map((item, itemIndex) => (
                <tr key={itemIndex}>
                    {headers.map((header, headerIndex) => (
                        <td key={headerIndex} style={{ textAlign: headerIndex > 0 && "right" }}>
                            {item[header.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
);

export default List;

List.propTypes = {
    headers: PropTypes.array,
    body: PropTypes.array
};
