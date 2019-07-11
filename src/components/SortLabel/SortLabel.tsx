import React from 'react';
import styled from 'styled-components';
import { SortType } from '../../ducks/servers.duck';
import { Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';

type ArrowProps = {
    active?: boolean;
};

const SortLabel = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.info};
    letter-spacing: 1.4px;

    ${screens[Sizes.XS]`
        font-size: 10px;
    `};
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
    color: ${({ theme, active }) => (active ? theme.colors.hovered.primary : theme.colors.muted)};
    opacity: ${({ active }) => (active ? '1' : '0.4')};
`;

const ArrowUp = styled(ArrowDown)`
    border-bottom: 4px solid;
    border-top: none;
`;

type Props = {
    label: string;
    sort: SortType;
    sortKey: string;
    onSort: (key: string) => any;
};

export default ({ label, sort, sortKey, onSort }: Props) => (
    <SortLabel onClick={() => onSort(sortKey)}>
        {label}
        {sort && sort.key === sortKey ? (
            <SortLabelArrows>
                <ArrowUp active={sort.order === 'asc'} />
                <ArrowDown active={sort.order === 'desc'} />
            </SortLabelArrows>
        ) : (
            <SortLabelArrows>
                <ArrowUp />
                <ArrowDown />
            </SortLabelArrows>
        )}
    </SortLabel>
);
