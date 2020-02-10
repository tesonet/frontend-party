import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onFetchServerList } from "../../actions/serversActions";
import {
  getSortOrder,
  sortByObjectStringProperty,
  sortByObjectByNumberProperty
} from "../../utils/sortUtils";

const Home = () => {
  const dispatch = useDispatch();
  const serversData = useSelector(({ servers }) => servers.data);
  const isFetching = useSelector(({ servers }) => servers.isFetching);
  const [servers, setServers] = useState([]);
  const [sortOrder, setSortOrder] = useState({});

  useEffect(() => {
    dispatch(onFetchServerList());
  }, []);
  useEffect(() => setServers(serversData), [serversData]);

  const handleSort = type => {
    const order = getSortOrder(sortOrder[type]);
    const sorted =
      type === "name"
        ? sortByObjectStringProperty(servers, type, order)
        : sortByObjectByNumberProperty(servers, type, order);

    setSortOrder({
      [type]: order
    });
    setServers([...sorted]);
  };

  return isFetching ? (
    <StyledLoadingContainer>Loading...</StyledLoadingContainer>
  ) : (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledHeaderCell>
            <button onClick={() => handleSort("name")}>SERVER</button>
          </StyledHeaderCell>
          <StyledHeaderCell textAlign="right">
            <button onClick={() => handleSort("distance")}>DISTANCE</button>
          </StyledHeaderCell>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {servers.map(server => (
          <StyledTableRow key={`${server.name}${server.distance}`}>
            <StyleCell>{server.name}</StyleCell>
            <StyleCell textAlign="right">{server.distance} km</StyleCell>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHead = styled.thead`
  background-color: #f5f5f5;
  border: none;
  height: 60px;
  width: 100%;
`;

const StyledTableRow = styled.tr`
  height: 60px;
  color: #666666;

  border: solid #e6e6e6 1px;
  padding: 5px 7px;
`;

const StyledHeaderCell = styled.th`
  padding: 0 24px;
  text-align: ${({ textAlign }) => textAlign || "left"};
  button {
    color: #999999;
    letter-spacing: 1.4px;
    font-weight: 300;
  }
`;

const StyleCell = styled.th`
  padding: 0 24px;
  color: #999999;
  letter-spacing: 1.4px;
  font-weight: 300;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

const StyledTableBody = styled.tbody`
  border-spacing: 105px;
`;

const StyledLoadingContainer = styled.div`
  background-color: #f5f5f5;
  color: #999999;
  font-size: 40px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Home;
