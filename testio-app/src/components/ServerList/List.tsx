import * as React from 'react';
import Header from './HeaderContainer';
import Row from './RowContainer';

interface IProps {
    onMount: () => void;
    uids: string[];
}

class List extends React.Component<IProps> {
    public componentDidMount() {
      this.props.onMount();
    }

    public render() {
        const { uids } = this.props;
        return (
            <div className="container">
                <Header />
                {uids.map((uid) => (
                    <Row uid={uid} key={uid} />
                ))}
            </div>
        );
    }
}

export default List;
