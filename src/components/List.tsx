// react and react dependencies
import * as React from 'react';
// axios
import axios from 'axios';
// api
import { api } from '../api';

interface IlistItem {
  name: string;
  distance: number;
}

interface IListStates {
  data: IlistItem[];
}

interface IListProps {}

class List extends React.Component<IListProps, IListStates> {

  constructor (props: IListProps) {
    super(props);

    this.state = {
      data: [],
    };

    this.getServers = this.getServers.bind(this);
    this.sortServers = this.sortServers.bind(this);
  }

  componentWillMount() {
    this.getServers();
  }

  getServers() {
    const authToken = localStorage.getItem('authToken');
    axios({
      method: 'get',
      url: `${api.url}/servers`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      if (typeof response.data !== 'undefined') {
        this.setState({
          data: response.data,
        });

        this.sortServers('asc');
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  sortServers(order: string) {
    const { data } = this.state;
    const sortedData = data.sort((a, b) => {
      const splitA = a.name.split(' #');
      const splitB = b.name.split(' #');

      if (splitA[0] < splitB[0]) return -1;
      if (splitA[0] > splitB[0]) return 1;

      if (a.distance > b.distance) return 1;
      if (a.distance < b.distance) return -1;
    });

    if (order === 'asc') {
      this.setState({
        data: sortedData,
      });
    } else if (order === 'dsc') {
      this.setState({
        data: sortedData.reverse(),
      });
    }
  }

  render() {
    const { data } = this.state;
    const items = data.map((item, index) =>
      <div key={index} className="list__row">
        <div className="wrapper wrapper--list">
          <span className="list__row-text">{ item.name }</span>
          <span className="list__row-text">{ item.distance } km</span>
        </div>
      </div>);

    return (
      <div className="list">
        <div className="list__row list__row--head">
          <div className="wrapper wrapper--list">
            <span className="list__row-text list__row-text--head">server</span>
            <span className="list__row-text list__row-text--head">distance</span>
          </div>
        </div>
        <div className="list__wrap">
          { items }
        </div>
      </div>
    );
  }
}

export default List;
