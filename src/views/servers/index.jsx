import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { getServers } from '../../actions';
import Row from './row';

import styles from './index.scss';

class Servers extends React.Component {
  componentDidMount() {
    this.props.getServers();
  }

  sortItems = (a, b) => {
    if (a.distance < b.distance) {
      return -1;
    } else if (a.distance > b.distance) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  renderItems = () => (
    <div>
      <Row item={{ name: 'SERVERS' }} index={-1} />
      {this.props.items.sort(this.sortItems).map(this.renderItem)}
    </div>
  );

  renderLoading = () => <div>loading</div>;

  renderItem = (item, index) => <Row key={index} item={item} />;

  render() {
    return (
      <div className={cn(styles.container)}>
        {this.props.loading && this.renderLoading()}
        {!!this.props.items.length && this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.servers });

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Servers);
