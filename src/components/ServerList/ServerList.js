import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onFetchServerList } from "../../actions/serversActions";
import {
  getSortOrder,
  sortByObjectStringProperty,
  sortByObjectByNumberProperty
} from "../../utils/sortUtils";
import * as styles from "../../constants/styles";

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
            <StyledCell data-testid="server-name">{server.name}</StyledCell>
            <StyledCell data-testid="server-distance" textAlign="right">
              {server.distance} km
            </StyledCell>
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
  height: 60px;
  width: 100%;
  border: none;
  background-color: ${styles.colors.grey1};
`;

const StyledTableRow = styled.tr`
  height: 60px;
  padding: 5px 7px;
  border: solid ${styles.colors.grey2} 1px;
  color: ${styles.colors.grey6};
`;

const StyledHeaderCell = styled.th`
  padding: 0 24px;
  text-align: ${({ textAlign }) => textAlign || "left"};
  button {
    border: none;
    background-color: ${styles.colors.grey1};
    color: ${styles.colors.grey6};
    ${styles.letterSpacing.large}
    ${styles.fontWeight.light}
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledCell = styled.th`
  padding: 0 24px;
  color: ${styles.colors.grey5};
  ${styles.fontWeight.light}
  ${styles.letterSpacing.large}
  ${styles.fontWeight.light}
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

const StyledTableBody = styled.tbody`
  border-spacing: 105px;
`;

const StyledLoadingContainer = styled.div`
  ${styles.align.center}
  height: 100vh;
  background-color: ${styles.colors.grey1};
  color: ${styles.colors.grey5};
  font-size: 40px;
  ${styles.fontWeight.light}
`;

export default Home;
