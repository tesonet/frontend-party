import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { Icons, Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';
import { colors } from '../../theme';

const Button = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid ${colors.blue1};
    padding: 8px 7px;
    font-size: 14px;
    transition: border-color 0.3s ease-out;
    background: ${colors.light1};

    &:hover {
        border-color: ${colors.green2};
    }

    svg {
        margin-right: 8px;
    }

    @media ${screens[Sizes.XS]} {
        font-size: 12px;
        padding: 6px 8px;
    }
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
