import * as React from 'react';

interface ILogoProps {
  className?: string;
  light?: boolean;
}

class Logo extends React.Component<ILogoProps> {
  public render() {
    const { light, className } = this.props;
    return (
      <div className={`logo ${light ? 'logo--light' : ''} ${className ? className : ''}`}></div>
    );
  }
}

export default Logo;
