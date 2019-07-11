import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../common/constants';
import Icon from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';

interface InputProps {
    readonly loading?: boolean;
}

const InputWrapper = styled.div`
    position: relative;
`;

const InputContainer = styled.div`
    position: relative;

    svg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 25px;
        margin: auto 0;
    }
`;

const Input = styled.input<InputProps>`
    width: 100%;
    padding: 19px 54px;
    font-size: 16px;
    color: #999;
    border-radius: 5px;

    &:only-child {
        padding: 19px 20px;
    }

    &[type='submit'] {
        font-weight: 700;
        color: ${({ theme, loading }) => (loading ? 'transparent' : theme.colors.light)};
        background-color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        transition: color 0.3s ease-out, background-color 0.3s ease-out;

        &:hover {
            background-color: ${({ theme }) => theme.colors.hovered.primary};
        }
    }

    ::placeholder {
        color: ${({ theme }) => theme.colors.muted};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.muted};
    }

    ::-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.muted};
    }
`;

const Error = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.light};
    padding: 5px 5px 0;
`;

type Props = {
    name?: string;
    value?: string;
    icon?: Icons;
    placeholder?: string;
    type?: string;
    onChange?: (value: any) => any;
    error?: string | null;
    loading?: boolean;
};

export default ({ icon, error, loading, ...rest }: Props) => (
    <InputWrapper>
        <InputContainer>
            <Input loading={loading} {...rest} />
            {loading && <Spinner />}
            {icon && <Icon icon={icon} />}
        </InputContainer>
        {error && <Error>{error}</Error>}
    </InputWrapper>
);
