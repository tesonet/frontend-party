import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { onServerListDataFetch } from "../../thunks/dataThunks/fetchDataThunks";

const TableServerList = ({ serverList, handleFetch }) => {

    console.log(serverList);

    useEffect(() => {
        handleFetch();
    },[])

    return (
        <table className="server-list">
            <thead>
                <tr className="server-list__header">
                    <td>Server</td>
                    <td>Distance</td>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    )
}



const mapStateToProps = state => state.fetchServerList;

const mapDispatchToProps = dispatch => ({
    handleFetch: () => dispatch(onServerListDataFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableServerList);
