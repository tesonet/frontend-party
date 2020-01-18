import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { onServerListDataFetch } from "../../thunks/dataThunks/fetchDataThunks";
import Triangle from "../../assets/svg/triangle.svg";
import sort from "../../utils/sort";
import SpinnerDark from "../../assets/svg/spinner-dark.svg";

const Tr = ({ server }) => (
  <tr>
    <td>{server.name}</td>
    <td>{server.distance} km</td>
  </tr>
);

const TableServerList = ({ serverList, loading, handleFetch }) => {
  const [sortByName, setSortByName] = useState({
    isActive: false,
    asc: false
  });
  const [sortByDistance, setSortByDistance] = useState({
    isActive: false,
    asc: false
  });

  let filteredList = serverList;

  const handleFilter = e => {
    let pickedFilter = e.target.name;

    if (pickedFilter === "filterByDistance") {
      setSortByName({ isActive: false, asc: false });
      setSortByDistance({ isActive: true, asc: !sortByDistance.asc });

      sortByDistance.asc
        ? (filteredList = sort(filteredList, "distance", "asc"))
        : (filteredList = sort(filteredList, "distance", "desc"));
    }

    if (pickedFilter === "filterByName") {
      setSortByDistance({ isActive: false, asc: false });
      setSortByName({ isActive: true, asc: !sortByName.asc });

      sortByName.asc
        ? (filteredList = sort(filteredList, "name", "asc"))
        : (filteredList = sort(filteredList, "name", "desc"));
    }

    e.preventDefault();
  };

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <table className="server-list-table">
      <thead className="server-list-table__head">
        <tr>
          <th>
            <button onClick={handleFilter} name="filterByName">
              Server
              <img
                src={Triangle}
                style={{
                  transform: `${
                    sortByName.asc ? "rotate(180deg)" : "rotate(0deg)"
                  }`,
                  opacity: `${sortByName.isActive ? 1 : 0.5}`
                }}
                alt="sorting icon"
              />
            </button>
          </th>
          <th>
            <button onClick={handleFilter} name="filterByDistance">
              Distance
              <img
                src={Triangle}
                style={{
                  transform: `${
                    sortByDistance.asc ? "rotate(180deg)" : "rotate(0deg)"
                  }`,
                  opacity: `${sortByDistance.isActive ? 1 : 0.5}`
                }}
                alt="sorting icon"
              />
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="server-list-table__body">
        {loading ? (
          <tr className="server-list-table__body__loading">
            <td>
              <img src={SpinnerDark} alt="Loading spinner animation dark" />
            </td>
          </tr>
        ) : (
          filteredList.map(server => (
            <Tr key={server.name + server.distance} server={server} />
          ))
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => state.fetchServerList;

const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(onServerListDataFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableServerList);
