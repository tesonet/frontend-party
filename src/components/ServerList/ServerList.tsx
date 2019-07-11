import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { actions as serverActions, selectors as serverSelectors, SortType } from '../../ducks/servers.duck';
import { RootState } from '../../root.reducer';
import SortLabel from '../SortLabel/SortLabel';
import { Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';
import Spinner from '../Styled/Spinner';

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    display: flex;
    height: ${({ theme }) => theme.list.default.itemHeight}px;
    padding: 0 15px;
    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: center;

    ${screens[Sizes.XS]`
        height: ${({ theme }) => theme.list.mobile.itemHeight}px;
        padding: 0 10px;
    `}
`;

const ListText = styled.div`
    font-size: 16px;
    color: #666;
    letter-spacing: 0.4px;

    ${screens[Sizes.XS]`
        font-size: 12px;
    `}
`;

const Scrollable = styled.div`
    position: relative;
    height: calc(100vh - ${({ theme }) => theme.list.default.headerHeight + theme.list.default.itemHeight}px);
    overflow: auto;

    ${screens[Sizes.XS]`
        height: calc(100vh - ${({ theme }) =>
            theme.list.mobile.headerHeight + theme.list.mobile.itemHeight}px);
    `}
`;

const ListHeader = styled(ListItem)`
    background-color: #f5f5f5;
    border-top: 1px solid #e6e6e6;
    text-transform: uppercase;
`;

const ListSpinner = styled(Spinner)`
    border-left-color: ${({ theme }) => theme.colors.primary};
`;

type ServerProps = {
    name: string;
    distance: number;
};

type StateProps = {
    servers: ServerProps[];
    loading: boolean;
    sortParams: SortType;
};

type DispatchProps = {
    actions: {
        fetchServers: typeof serverActions.fetchServers;
        setSortParams: typeof serverActions.setSortParams;
    };
};

const ServerList = ({ actions, servers, loading, sortParams }: DispatchProps & StateProps) => {
    useEffect(() => {
        actions.fetchServers();
    }, []);

    return (
        <List>
            <ListHeader>
                <SortLabel
                    sortKey="name"
                    label="Server"
                    sort={sortParams}
                    onSort={key => actions.setSortParams(key)}
                />
                <SortLabel
                    sortKey="distance"
                    label="Distance"
                    sort={sortParams}
                    onSort={key => actions.setSortParams(key)}
                />
            </ListHeader>
            <Scrollable>
                {loading ? (
                    <ListSpinner size={Sizes.LG} />
                ) : (
                    servers.map(({ name, distance }) => (
                        <ListItem key={`${name}_${distance}`}>
                            <ListText>{name}</ListText>
                            <ListText>{distance}</ListText>
                        </ListItem>
                    ))
                )}
            </Scrollable>
        </List>
    );
};

const mapStateToProps = (state: RootState): StateProps => ({
    loading: state.servers.loading,
    servers: serverSelectors.getSortedServers(state),
    sortParams: serverSelectors.sortSelector(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
    actions: bindActionCreators(serverActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerList);
