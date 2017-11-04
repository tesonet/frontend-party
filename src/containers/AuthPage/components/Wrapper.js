import styled from 'styled-components';
import BackgroundImage from '../images/background.png';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 100%;
   background-image: url(${BackgroundImage});
   background-size: cover;
   background-color: #0a142d;
`;

export default Wrapper;
