import * as React from 'react';

interface IIconProps {
  className?: string;
  type: string;
}

class Icon extends React.Component<IIconProps> {
  public render() {
    const { type, className } = this.props;
    return (
      <div className={`icon icon--${type} ${className ? className : ''}`}></div>
    );
  }
}

export default Icon;
