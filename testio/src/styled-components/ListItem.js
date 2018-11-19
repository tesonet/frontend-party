import styled from 'styled-components'
export const ListItem = styled.span`
display:flex;
align-items: center;
justify-content: ${(props)=>props.side};
`;
