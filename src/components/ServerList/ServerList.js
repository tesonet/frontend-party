import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onFetchServerList } from "../../actions/serversActions";

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
  color: #999999;
  letter-spacing: 1.4px;
  font-weight: 300;
  text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
`;

const StyleCell = styled.th`
  padding: 0 24px;
  color: #999999;
  letter-spacing: 1.4px;
  font-weight: 300;
  text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
`;

const StyledTableBody = styled.tbody`
  border-spacing: 105px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const servers = useSelector(({ servers }) => servers.data);

  useEffect(() => {
    dispatch(onFetchServerList());
  }, []);

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          <StyledHeaderCell>SERVER</StyledHeaderCell>
          <StyledHeaderCell alignRight>DISTANCE</StyledHeaderCell>
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {servers.map(server => (
          <StyledTableRow key={server.name + server.distance}>
            <StyleCell>{server.name}</StyleCell>
            <StyleCell alignRight>{server.distance} km</StyleCell>
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default Home;
