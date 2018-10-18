import React, {Component} from 'react';

class FavoriteServers  extends Component {

    render() {
        console.log(this.props.favorites);
        return (
            <div className="inner-page favorite-server">
                <div className="list">
                    <div className="list_header">
                        <div>SERVER</div>
                        <div>DISTANCE</div>
                    </div>
                    <ul className="list_items">
                        {this.props.favorites.map((server, index) => (
                            <li className="list_item" key={index}>
                                <div>{server.name}</div>
                                <div>{server.distance}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FavoriteServers;