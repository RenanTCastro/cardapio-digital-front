import styled from "styled-components/macro";

export const Button = styled.button`
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #FF914D 32.29%, #FF3131 87.5%);
  font-family: Inter;
  font-size: 14px;
  color: white;  
  &:hover {
    cursor: pointer;
  }
  &:active{
    background-color: #FF3131;
  }
`;
