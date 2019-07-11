import React from 'react';
import styled from 'styled-components';
import Spinner from '../Styled/Spinner';
import { Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';

type InputProps = {
    readonly loading?: number;
};

const InputContainer = styled.div`
    position: relative;
`;

const Input = styled.input<InputProps>`
    width: 100%;
    padding: 20px 25px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, loading }) => (loading ? 'transparent' : theme.colors.light)};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: color 0.3s ease-out, background-color 0.3s ease-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hovered.primary};
    }

    ${screens[Sizes.XS]`
        padding: 13px 18px;
        font-size: 12px;
    `}
`;

const ButtonSpinner = styled(Spinner)`
    border-left-color: ${({ theme }) => theme.colors.light};
`;

type Props = {
    value?: string;
    type?: string;
    loading?: boolean;
};

export default ({ loading, ...rest }: Props) => (
    <InputContainer>
        <Input loading={loading ? 1 : 0} {...rest} />
        {loading && <ButtonSpinner size={Sizes.XS} />}
    </InputContainer>
);
