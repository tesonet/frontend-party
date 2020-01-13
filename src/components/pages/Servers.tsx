import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchServers } from "../../actions/serverActions";
import { State } from "../../reducers";
import styled from "@emotion/styled";
import Colors from "../../constants/colors";
import { ServerInterface } from "../../reducers/serverReducer";
import * as R from "ramda";

const StyledRow = styled.div`
  height: 60px;
  color: ${Colors.gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${Colors.gray400};
  transition: background-color 100ms;
  :hover {
    background-color: ${Colors.gray100};
  }
`;

const StyledHeader = styled(StyledRow)`
  background-color: ${Colors.gray100};
  border-top: 1px solid ${Colors.gray400};
  color: ${Colors.gray700};
`;
const TextButton = styled.button`
  font: inherit;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
const Loading = styled.div`
  padding: 20px;
  width: 100%;
`;

const Row = ({ name, distance }: ServerInterface) => {
  return (
    <StyledRow data-test-id="Main-Row">
      <div>{name}</div>
      <div>{distance} km</div>
    </StyledRow>
  );
};

enum SortDirection {
  Unordered = "",
  Descending = "Descending",
  Ascending = "Ascending"
}

const orderNameMap = {
  [SortDirection.Unordered]: "",
  [SortDirection.Ascending]: "A-Z",
  [SortDirection.Descending]: "Z-A"
} as const;

const orderDistanceMap = {
  [SortDirection.Unordered]: "",
  [SortDirection.Descending]: "Descending",
  [SortDirection.Ascending]: "Ascending"
} as const;

type Columns = keyof ServerInterface;

const sort = (direction: SortDirection, key: Columns) =>
  R.sort(
    (direction === SortDirection.Descending ? R.descend : R.ascend)(R.prop(key))
  );

const Servers: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const servers = useSelector((state: State) => state.servers);
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
        return setOrderDirection(SortDirection.Descending);
      case orderDirection === SortDirection.Ascending:
        return setOrderDirection(SortDirection.Descending);
      default:
        return setOrderDirection(SortDirection.Unordered);
    }
  };

  let orderedServers = servers;
  if (orderBy && orderDirection !== SortDirection.Unordered) {
    orderedServers = sort(orderDirection, orderBy)(orderedServers);
  }

  return (
    <>
      <StyledHeader>
        <TextButton
          onClick={() => onOrderChange("name")}
          type="button"
          data-test-id="Sort-Name"
        >
          Servers {orderBy === "name" ? orderNameMap[orderDirection] : ""}
        </TextButton>
        <TextButton
          onClick={() => onOrderChange("distance")}
          type="button"
          data-test-id="Sort-Distance"
        >
          Distance{" "}
          {orderBy === "distance" ? orderDistanceMap[orderDirection] : ""}
        </TextButton>
      </StyledHeader>
      {!orderedServers.length && <Loading>Loading...</Loading>}
      {orderedServers.map(server => (
        <Row {...server} key={`${server.name}_${server.distance}`} />
      ))}
    </>
  );
};

export default Servers;
