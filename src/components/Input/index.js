/* eslint-disable no-confusing-arrow */
// @flow
import * as React from 'react';
import styled from 'styled-components';

import Icon, {
    type IconNameT,
} from 'components/Icon';


type PropsT = {
    icon?: ?IconNameT
};

const InputComponent = ({
    icon,
    ...props
}: PropsT, ref) => (
    <Wrapper>
        {!!icon && (
            <IconWrapper>
                <Icon
                    name={icon}
                />
            </IconWrapper>
        )}
        <Input
            ref={ref}
            hasIcon={!!icon}
            {...props}
        />
    </Wrapper>
);

InputComponent.defaultProps = {
    icon: null,
};

const Wrapper = styled.label`
    position: relative;
    display: block;
`;

const Input = styled.input`
    color: #B3B3B3;
    font-size: 16px;
    line-height: 36px;
    background: #fff;
    padding: 12px;
    padding-left: ${props => props.hasIcon ? '56px' : '12px'};
    border-radius: 6px;
    outline: none;
    border: none;
    width: 100%;
    box-sizing: border-box;

    &:focus,
    &:active {
        color: #999;
    }

    &::placeholder {
        color: #B3B3B3;
    }
`;

const IconWrapper = styled.label`
    position: absolute;
    color: #B3B3B3;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 42px;
    pointer-events: none;
`;


export default React.memo<PropsT>(
    React.forwardRef<PropsT, HTMLLabelElement>(InputComponent),
);
