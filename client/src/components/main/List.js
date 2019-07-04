import React from 'react';
import { connect } from 'react-redux';
import filter from '../../modules/filter';
import net from '../../modules/net';
import list from '../../store/actions/list';
import sort from '../../store/actions/sort';
import './List.scss';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.list = [];
  }

  componentDidMount() {
    const { dispatch, user } = this.props;
    const token = user.token;
    (async () => {
      const data = await net.servers(token);
      this.list = data.list;
      dispatch(list.servers(this.list));
    })();
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(list.servers([]));
    dispatch(sort.servers());
  }

  render() {
    switch (this.props.sort) {
      case 'SORT_NAME': filter.string(this.list, 'name'); break;
      case 'SORT_DISTANCE': filter.number(this.list, 'distance'); break;
      default: break;
    }

    this.items = this.list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <span>{item.name}</span>
          <span>{item.distance}</span>
        </li>
      )
    });

    return (
      <div className="List">
        <ul>
          {this.items}
        </ul>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    sort: state['sort:servers'],
    list: state['list:servers'],
    user: state.user
  };
}

export default connect(mapStateToProps)(ListView);