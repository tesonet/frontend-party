import React from 'react';
import cn from 'classnames';
import ServerRow from '../../components/ServerRow';

import styles from './styles.scss';

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
      <ServerRow item={{ name: 'SERVERS' }} index={-1} />
      {this.props.items.sort(this.sortItems).map(this.renderItem)}
    </div>
  );

  renderLoading = () => <div>loading</div>;

  renderItem = (item, index) => <ServerRow key={index} item={item} />;

  render() {
    return (
      <div className={cn(styles.container)}>
        {this.props.loading && this.renderLoading()}
        {!!this.props.items.length && this.renderItems()}
      </div>
    );
  }
}

export default Servers;
