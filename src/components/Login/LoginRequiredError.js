import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 12px;
  color: white;
  position: relative;
  top: -15px;
  right: -5px;
  letter-spacing: 0.35px;
`;
