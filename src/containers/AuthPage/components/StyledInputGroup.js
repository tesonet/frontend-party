import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const StyledInputGroup = styled(InputGroup)`
  background-color: ${(props) => props.theme.primaryBgColor};
  border-radius: 5px;
  margin-bottom: 20px;
  
  & > * {   
    height: 56px;
    color: ${(props) => props.theme.secondaryTextColor};
  }
`;

export default StyledInputGroup;
