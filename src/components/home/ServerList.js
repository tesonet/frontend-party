import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ServerList = (props) => {
  if (!props.servers) {
    return (
      <div>
        <div> Welcome Home!</div>
      </div>
    )
  } else {
    const serverList = props.servers.map( (server, index) => (
      <ListGroupItem key={`id-${server.name}-${index}`}
        className="justify-content-between">
        <span>{server.name}</span>
        <span>{server.distance} km</span>
      </ListGroupItem>
    ))
    return (
      <article>
        <ListGroup className="list-header">
          <ListGroupItem className="justify-content-between">
            <span>SERVER</span>
            <span>DISTANCE</span>
          </ListGroupItem>
        </ListGroup>
        <div>
          <ListGroup>
            {serverList}
          </ListGroup>
          <br />
          <br />
          <br />
        </div>
      </article>
    )
  }
}

export default ServerList
