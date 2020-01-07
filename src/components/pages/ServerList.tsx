import React from 'react';
import Container from '../styled/Container';
import List, {
  ListRow,
  ListItem,
  ListHeaderRow,
} from '../common/List';
import Header from '../common/Header';
import ScrollArea from '../common/ScrollArea';

export default function ServerList() {
  const serverList = [
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
    {
      name: 'aaa',
      distance: 66,
      id: 1,
    },
    {
      name: 'bbb',
      distance: 66,
      id: 2,
    },
  ];
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
          {serverList.map(server => (
            <ListRow key={server.id}>
              <ListItem>{server.name}</ListItem>
              <ListItem>{server.distance}</ListItem>
            </ListRow>
          ))}
        </ScrollArea>
      </List>
    </Container>
  );
}
