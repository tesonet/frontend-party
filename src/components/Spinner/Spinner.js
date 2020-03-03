import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
		transform: scale(0);
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
`;

export default styled.div`
  vertical-align: middle;
  margin: auto;
  border: 0.2em solid currentcolor;
  border-radius: 50%;
  animation: ${animation} 1s ease-out infinite;
  width: ${props => props.size};
  height: ${props => props.size};
  display: ${props => (props.show ? 'block' : 'none')};
  margin-top: ${props => (props.MTop ? props.MTop : 0)};
`;
