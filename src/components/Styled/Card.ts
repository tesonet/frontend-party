import styled from 'styled-components';
import { screens } from '../../utils/helpers';
import { Sizes } from '../../common/constants';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 95%;

    ${screens[Sizes.XS]`
        max-width: 80%;
    `}
`;

export default Card;
