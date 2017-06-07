import React from 'react';
import { connect } from 'react-redux';
import { getServers } from '../../actions';

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
    this.props.items.sort(this.sortItems).map(this.renderItem)
  );

  renderLoading = () => <div>loading</div>;

  renderItem = (item, index) => (
    <div key={index}>
      {item.name} {item.distance}
    </div>
  );

  render() {
    return (
      <div>
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
