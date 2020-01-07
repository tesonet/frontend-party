import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../styled/Container';
import List, {
  ListRow,
  ListItem,
  ListHeaderRow,
} from '../common/List';
import Header from '../common/Header';
import ScrollArea from '../common/ScrollArea';
import { getServerList } from '../../store/actions/serverList.actions';

type listType = [
  {
    name: string;
    distance: number;
  },
];

function getSortedList(list: listType) {
  return list.sort(
    (a, b) => a.distance - b.distance || a.name.localeCompare(b.name),
  );
}

function useServerList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServerList());
  }, [dispatch]);

  const serverList = useSelector((state: any) => state.serverList);

  return serverList;
}

export default function ServerList() {
  const { serverList, fetchingServerList } = useServerList();
  console.log(serverList, fetchingServerList);

  return (
    <Container>
      <Header />
      <List>
        <ListHeaderRow>
          <ListItem>SERVER</ListItem>
          <ListItem>DISTANCE</ListItem>
        </ListHeaderRow>
        <ScrollArea
          style={{
            width: '100%',
            height: 'calc(100vh - ( 113px + 25px + 20px + 16px ))',
          }}
        >
          {serverList &&
            getSortedList(serverList).map(
              (server: any, i: number) => (
                <ListRow key={i}>
                  <ListItem>{server.name}</ListItem>
                  <ListItem>{server.distance} km</ListItem>
                </ListRow>
              ),
            )}
        </ScrollArea>
      </List>
    </Container>
  );
}
