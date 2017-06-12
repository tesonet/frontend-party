import React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ServerRow from '../../components/ServerRow';

import styles from './styles.scss';

class Servers extends React.Component {
  componentDidMount() {
    this.props.getServers();
  }

  sortItems = (a, b) => (a.distance - b.distance) || (a.name.charCodeAt(0) - b.name.charCodeAt(0));

  renderItems = () => (
    <div>
      <ServerRow item={{ name: 'SERVER' }} isHeader />
      {this.props.items.sort(this.sortItems).map(this.renderItem)}
    </div>
  );

  renderLoading = () => <div className={styles.loading}><Icon spin name="spinner" /></div>;

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

Servers.propTypes = {
  getServers: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};

Servers.defaultProps = {
  loading: false,
};

export default Servers;
