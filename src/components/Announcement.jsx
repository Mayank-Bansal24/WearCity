import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #E3FCBF;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 1000;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping for Orders Above 499 Rs.</Container>;
};

export default Announcement;