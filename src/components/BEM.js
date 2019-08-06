import React, { Component } from 'react';

// Consider wrapping every element in 3 layers
// This gives more freedom in later stages when styling
// And manipulating elements with JavaScript
class BEM extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          blockClass: `${props.name}`,
          wrapperClass: `${props.name}__wrapper`,
          containerClass: `${props.name}__container`
        };
    }
      
    render() {
        return (
        <div className={this.state.blockClass}>
            <div className={this.state.wrapperClass}>
                <div className={this.state.containerClass}>
                {this.props.children}
                </div>
            </div>
        </div>
        )
    }
}

export default BEM;