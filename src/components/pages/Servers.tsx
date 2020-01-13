import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchServers } from "../../actions/serverActions";
import { State } from "../../reducers";
import styled from "@emotion/styled";
import Colors from "../../constants/colors";
import { ServerInterface } from "../../reducers/serverReducer";

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

enum SortDirectionName {
  Unordered = "",
  Descending = "A-Z",
  Ascending = "Z-A"
}

enum SortDirectionDistance {
  Unordered = "",
  Descending = "Descending",
  Ascending = "Ascending"
}

const Servers: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const [orderName, setNameOrder] = useState(SortDirectionName.Unordered);
  const [orderDistance, setDistanceOrder] = useState(
    SortDirectionDistance.Unordered
  );
  useEffect(() => {
    fetchServers(dispatch);
  }, []);
  const servers = useSelector((state: State) => state.servers);

  const onNameOrderChange = () => {
    if (orderDistance) {
      setDistanceOrder(SortDirectionDistance.Unordered);
    }
    if (orderName === SortDirectionName.Unordered) {
      return setNameOrder(SortDirectionName.Descending);
    }
    if (orderName === SortDirectionName.Descending) {
      return setNameOrder(SortDirectionName.Ascending);
    }
    return setNameOrder(SortDirectionName.Unordered);
  };

  const onDistanceOrderChange = () => {
    if (orderName) {
      setNameOrder(SortDirectionName.Unordered);
    }
    if (orderDistance === SortDirectionDistance.Unordered) {
      return setDistanceOrder(SortDirectionDistance.Descending);
    }
    if (orderDistance === SortDirectionDistance.Descending) {
      return setDistanceOrder(SortDirectionDistance.Ascending);
    }
    return setDistanceOrder(SortDirectionDistance.Unordered);
  };

  let orderedServers = servers;
  if (orderName !== SortDirectionName.Unordered) {
    orderedServers = [
      ...servers.sort((a, b) => {
        if (a.name < b.name) {
          return orderName === SortDirectionName.Descending ? -1 : 1;
        }
        if (a.name > b.name) {
          return orderName === SortDirectionName.Descending ? 1 : -1;
        }
        return 0;
      })
    ];
  }
  if (orderDistance !== SortDirectionDistance.Unordered) {
    orderedServers = [
      ...servers.sort((a, b) =>
        orderDistance === SortDirectionDistance.Descending
          ? b.distance - a.distance
          : a.distance - b.distance
      )
    ];
  }

  return (
    <>
      <StyledHeader>
        <TextButton onClick={onNameOrderChange} type="button" data-test-id="Sort-Name">
          Servers {orderName}
        </TextButton>
        <TextButton onClick={onDistanceOrderChange} type="button" data-test-id="Sort-Distance">
          Distance {orderDistance}
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
