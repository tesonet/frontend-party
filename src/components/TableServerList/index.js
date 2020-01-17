import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onServerListDataFetch } from "../../thunks/dataThunks/fetchDataThunks";

const Tr = ({ server }) => (
  <tr>
    <td>{server.name}</td>
    <td>{server.distance} km</td>
  </tr>
)

const TableServerList = ({ serverList, loading, handleFetch }) => {
  console.log(serverList);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <table className="server-list-table">
      <thead className="server-list-table__head">
        <tr>
          <th>Server</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody className="server-list-table__body">
        {serverList.map(server => <Tr key={server.name + server.distance} server={server}/>)}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => state.fetchServerList;

const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(onServerListDataFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableServerList);
