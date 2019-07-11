import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { Icons, Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';

const Button = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid #2f3254;
    padding: 8px 7px;
    font-size: 14px;
    transition: border-color 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.light};

    &:hover {
        border-color: #99cc33;
    }

    svg {
        margin-right: 8px;
    }

    ${screens[Sizes.XS]`
        font-size: 12px;
        padding: 6px 8px;
    `}
`;

type Props = {
    icon?: Icons;
    onClick?: (value: any) => any;
    children?: React.ReactNode;
};

export default ({ icon, children, ...rest }: Props) => (
    <Button {...rest}>
        {icon && <Icon icon={icon} />}
        {children}
    </Button>
);
