import styled from 'styled-components';


const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

Page.Header = styled.div`
  padding: 38px 15px;
`;

Page.Body = styled.div`
  flex: 1;
`;

export default Page;
