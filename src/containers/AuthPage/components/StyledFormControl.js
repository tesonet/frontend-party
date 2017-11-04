import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';

const StyledFormControl = styled(FormControl)`
    border: inherit;
    box-shadow: none;
    transition: none;
    &:focus {
      color: ${(props) => props.theme.inputActiveTextColor};
      box-shadow: none;
    }
`;

export default StyledFormControl;
