import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import {
    actions as serverActions,
    selectors as serverSelectors,
    SortParamsType,
} from '../../ducks/servers.duck';
import { Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';
import { RootState } from '../../root.reducer';
import { colors } from '../../theme';

type ArrowProps = {
    active?: boolean;
};

const SortLabelContainer = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${colors.grey2};
    letter-spacing: 1.4px;
    user-select: none;

    @media ${screens[Sizes.XS]} {
        font-size: 10px;
    }
`;

const SortLabelArrows = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 11px;
    margin-left: 5px;
`;

const ArrowDown = styled.span<ArrowProps>`
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    color: ${({ active }) => (active ? colors.green3 : colors.grey1)};
    opacity: ${({ active }) => (active ? '1' : '0.4')};
`;

const ArrowUp = styled(ArrowDown)`
    border-bottom: 4px solid;
    border-top: none;
`;

type Props = {
    label: string;
    sortKey: string;
};

type StateProps = {
    sortParams: SortParamsType;
};

type DispatchProps = {
    actions: {
        setSortParams: typeof serverActions.setSortParams;
    };
};

const SortLabel = ({ actions, label, sortParams, sortKey }: Props & StateProps & DispatchProps) => (
    <SortLabelContainer data-testid="container" onClick={() => actions.setSortParams(sortKey)}>
        {label}
        {sortParams && sortParams.key === sortKey ? (
            <SortLabelArrows>
                <ArrowUp data-testid="arrow-up" active={sortParams.order === 'asc'} />
                <ArrowDown data-testid="arrow-down" active={sortParams.order === 'desc'} />
            </SortLabelArrows>
        ) : (
            <SortLabelArrows>
                <ArrowUp data-testid="arrow-up" />
                <ArrowDown data-testid="arrow-down" />
            </SortLabelArrows>
        )}
    </SortLabelContainer>
);

const mapStateToProps = (state: RootState): StateProps => ({
    sortParams: serverSelectors.sortSelector(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
    actions: bindActionCreators(serverActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortLabel);
