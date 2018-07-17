import * as React from 'react';

interface IProps {
    onClick: any;
}

const TestButton: React.SFC<IProps> = ({ onClick }) => (
    <button onClick={ onClick }>Click Me</button>
);

export default TestButton;
