import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import SortLabel from '../SortLabel/SortLabel';
import { colors, heights } from '../../theme';
import Button from '../common/Button';
import { Sizes } from '../../common/constants';
import { actions as serverActions, selectors as serverSelectors } from '../../ducks/servers.duck';
import { RootState } from '../../root.reducer';
import { screens } from '../../utils/helpers';
import Spinner from '../common/Spinner';
import Card from '../common/Card';

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    display: flex;
    height: ${heights.default.item};
    padding: 0 15px;
    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: center;

    @media ${screens[Sizes.XS]} {
        height: ${heights[Sizes.XS].item};
        padding: 0 10px;
    }
`;

const ListHeader = styled(ListItem)`
    background: ${colors.light2};
    border-top: 1px solid #e6e6e6;
    text-transform: uppercase;
`;

const ListText = styled.div`
    font-size: 16px;
    color: ${colors.grey3};
    letter-spacing: 0.4px;

    @media ${screens[Sizes.XS]} {
        font-size: 12px;
    }
`;

const ListBody = styled.div`
    position: relative;
    height: calc(100vh - (${heights.default.header} + ${heights.default.item}));
    overflow: auto;

    @media ${screens[Sizes.XS]} {
        height: calc(100vh - (${heights[Sizes.XS].header} + ${heights[Sizes.XS].item}));
    }
`;

const ListSpinner = styled(Spinner)`
    border-left-color: ${colors.green1};
`;

const ListErrorCard = styled(Card)`
    margin-top: 20px;

    & > * {
        margin-top: 10px;
    }
`;

type ServerProps = {
    name: string;
    distance: number;
};

type StateProps = {
    loading: boolean;
    errorMessage: string | null;
    servers: ServerProps[];
};

type DispatchProps = {
    actions: {
        fetchServers: typeof serverActions.fetchServers;
    };
};

const ServerList = ({ actions, loading, errorMessage, servers }: DispatchProps & StateProps) => {
    useEffect(() => {
        actions.fetchServers();
    }, []);

    return (
        <List>
            <ListHeader>
                <SortLabel sortKey="name" label="Server" />
                <SortLabel sortKey="distance" label="Distance" />
            </ListHeader>
            <ListBody>
                {errorMessage && (
                    <ListErrorCard>
                        {errorMessage}
                        <Button onClick={() => actions.fetchServers()}>Reload</Button>
                    </ListErrorCard>
                )}
                {loading && <ListSpinner size={Sizes.LG} />}
                {servers.map(({ name, distance }) => (
                    <ListItem key={`${name}_${distance}`}>
                        <ListText>{name}</ListText>
                        <ListText>{distance}</ListText>
                    </ListItem>
                ))}
            </ListBody>
        </List>
    );
};

const mapStateToProps = (state: RootState): StateProps => ({
    loading: state.servers.loading,
    errorMessage: state.servers.errorMessage,
    servers: serverSelectors.getSortedServers(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
    actions: bindActionCreators(serverActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerList);
