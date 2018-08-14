import React, { Component } from 'react';

export default class Page extends Component {
  static defaultProps = {
    name: '',
    isInner: true,
    className: 'container-fluid h-100',
    title: 'Testio.',
    children: null
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div id={ `page_${this.props.name}` } className={ `${this.props.className} ${ this.props.isInner && 'page-inner' }` }>
        { this.props.children }
      </div>
    );
  }
}
