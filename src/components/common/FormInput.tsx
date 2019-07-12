import React, { useRef } from 'react';
import styled from 'styled-components';
import { Icons, Sizes } from '../../common/constants';
import Icon from './Icon';
import { screens } from '../../utils/helpers';
import { colors } from '../../theme';

type InputProps = {
    readonly loading?: boolean;
};

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
    background: ${colors.light1};
    border-radius: 5px;
    color: ${colors.grey2};
    cursor: text;

    svg {
        margin-right: 15px;
    }

    @media ${screens[Sizes.XS]} {
        padding: 13px 18px;
    }
`;

const FormInput = styled.input<InputProps>`
    flex-grow: 1;
    font-size: 16px;

    @media ${screens[Sizes.XS]} {
        font-size: 12px;
    }

    ::placeholder {
        color: ${colors.grey1};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${colors.grey1};
    }

    ::-ms-input-placeholder {
        color: ${colors.grey1};
    }
`;

const Error = styled.div`
    font-size: 12px;
    color: ${colors.light1};
    padding: 5px 5px 0;

    @media ${screens[Sizes.XS]} {
        font-size: 10px;
    }
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

export default ({ icon, error, loading, ...rest }: Props) => {
    const inputElem = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <InputContainer onClick={() => inputElem.current && inputElem.current.focus()}>
                {icon && <Icon icon={icon} />}
                <FormInput ref={inputElem} loading {...rest} />
            </InputContainer>
            {error && <Error>{error}</Error>}
        </div>
    );
};
