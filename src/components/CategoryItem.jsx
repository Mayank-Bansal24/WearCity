import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
  ${mobile({ height: "20vh" })}
`;

// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const Info = styled.div`
    
  position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

const Title = styled.h1`
    
justify-content: top;
    color:black;
    align-items: center;
    margin-left:90px;
    /* margin-bottom: 420px; */
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color:#6D6968;
    color:white;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        
        <Button>SHOP NOW</Button>
      </Info>
      <Title>{item.title}</Title>
    </Container>
  );
};

export default CategoryItem;