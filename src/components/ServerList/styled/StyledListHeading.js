import styled from 'styled-components';

const StyledListHeading = styled.div`
  align-items: center;
  background-color: ${props => props.theme.bgColorSecondary};
  border: 1px solid ${props => props.theme.listBorderColor};
  color: ${props => props.theme.listTextColorHead};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 4rem;
  padding: 0 1rem;
  text-transform: uppercase;
`;

export default StyledListHeading;
