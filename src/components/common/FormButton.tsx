import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import { Sizes } from '../../common/constants';
import { screens } from '../../utils/helpers';
import { colors } from '../../theme';

type InputProps = {
    readonly loading?: boolean;
};

const InputContainer = styled.div`
    position: relative;
`;

const Input = styled.input<InputProps>`
    width: 100%;
    padding: 20px 25px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ loading }) => (loading ? colors.light1 : 'transparent')};
    background: ${colors.green1};
    border-radius: 5px;
    cursor: pointer;
    transition: color 0.3s ease-out, background 0.3s ease-out;

    &:hover {
        background: ${colors.green3};
    }

    @media ${screens[Sizes.XS]} {
        padding: 13px 18px;
        font-size: 12px;
    }
`;

const ButtonSpinner = styled(Spinner)`
    border-left-color: ${colors.light1};
`;

type Props = {
    value?: string;
    loading: boolean;
};

export default ({ loading, ...rest }: Props) => (
    <InputContainer>
        <Input data-testid="input" type="submit" loading {...rest} />
        {loading && <ButtonSpinner data-testid="spinner" size={Sizes.XS} />}
    </InputContainer>
);
