import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 110px;
  background-color: white;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding:  20px 0px 0px 0px;
  align-items: center;
`;

const Language = styled.span`
  font-size: 25px;
  color: black;
  cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 2px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  height: 30px;
`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
padding:  0px 0px 40px 0px;
  font-weight: bold;
  color: black;
  font-size: 70px;
  height: 10px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
padding:  20px 0px 0px 0px;
  font-size: 20px;
  cursor: pointer;
  color: black;
  margin-left: 25px;
  
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "black", fontSize: 30 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>WearCity</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar