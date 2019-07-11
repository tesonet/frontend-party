import React from 'react';
import styled from 'styled-components';
import { Icons, Sizes } from '../../common/constants';
import Icon from '../Icon/Icon';
import { screens } from '../../utils/helpers';

type InputProps = {
    readonly loading?: number;
};

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
    background-color: #fff;
    border-radius: 5px;
    font-size: 16px;
    color: #999;

    svg {
        margin-right: 15px;
    }

    ${screens[Sizes.XS]`
        padding: 13px 18px;
        font-size: 12px;
    `}
`;

const FormInput = styled.input<InputProps>`
    flex-grow: 1;

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

    ${screens[Sizes.XS]`
        font-size: 10px;
    `}
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
    <div>
        <InputContainer>
            {icon && <Icon icon={icon} />}
            <FormInput loading={loading ? 1 : 0} {...rest} />
        </InputContainer>
        {error && <Error>{error}</Error>}
    </div>
);
