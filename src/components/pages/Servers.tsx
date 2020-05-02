import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import * as R from "ramda";
import { fetchServers } from "../../actions/serverActions";
import { State } from "../../reducers";
import Colors from "../../constants/colors";
import { ServerInterface } from "../../reducers/serverReducer";
import {
  orderDistanceMap,
  orderNameMap,
  SortDirection
} from "../../constants/filters";
import Row, { StyledRow } from "@components/molecules/Row";

const StyledHeader = styled(StyledRow)`
  background-color: ${Colors.gray100};
  border-top: 1px solid ${Colors.gray400};
  color: ${Colors.gray700};
`;
const StyledTextButton = styled.button`
  font: inherit;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
const StyledMessage = styled.div`
  padding: 20px;
  width: 100%;
`;

const StyledError = styled(StyledMessage)`
  color: ${Colors.error};
`;

type Columns = keyof ServerInterface;

const sort = (direction: SortDirection, key: Columns) =>
  R.sort(
    (direction === SortDirection.Descending ? R.descend : R.ascend)(R.prop(key))
  );

const Servers: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state: State) => state.servers);
  const [orderDirection, setOrderDirection] = useState<SortDirection>(
    SortDirection.Unordered
  );
  const [orderBy, setOrderBy] = useState<Columns>();
  useEffect(() => {
    fetchServers(dispatch);
  }, []);

  const onOrderChange = (type: Columns) => {
    switch (true) {
      case type !== orderBy:
        setOrderDirection(SortDirection.Ascending);
        setOrderBy(type);
        return;
      case orderDirection === SortDirection.Unordered:
        return setOrderDirection(SortDirection.Ascending);
      case orderDirection === SortDirection.Ascending:
        return setOrderDirection(SortDirection.Descending);
      default:
        return setOrderDirection(SortDirection.Unordered);
    }
  };

  const shouldSort = orderBy && orderDirection !== SortDirection.Unordered;
  const orderedServers = shouldSort
    ? sort(orderDirection, orderBy!)(list)
    : list;

  return (
    <>
      <StyledHeader>
        <StyledTextButton
          onClick={() => onOrderChange("name")}
          type="button"
          data-test-id="Sort-Name"
        >
          Servers {orderBy === "name" && orderNameMap[orderDirection]}
        </StyledTextButton>
        <StyledTextButton
          onClick={() => onOrderChange("distance")}
          type="button"
          data-test-id="Sort-Distance"
        >
          Distance {orderBy === "distance" && orderDistanceMap[orderDirection]}
        </StyledTextButton>
      </StyledHeader>
      {loading && <StyledMessage>Loading...</StyledMessage>}
      {!loading && !orderedServers.length && (
        <StyledMessage>No servers found</StyledMessage>
      )}
      {error && <StyledError>error</StyledError>}
      {orderedServers.map(server => (
        <Row {...server} key={`${server.name}_${server.distance}`} />
      ))}
    </>
  );
};

export default Servers;
