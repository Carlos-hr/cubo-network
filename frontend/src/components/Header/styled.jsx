import styled from "styled-components";
import { primary } from "../../constants/colors";

export const Main = styled.div`
  height: 23vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 10%;
  align-items: center;
  justify-items: center;
  column-gap: 1vw;
  background-color: ${primary};
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: none;
  height: 9vh;
  max-height: 60px;
  width: 100%;
  border-radius: 3px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${primary};
  color: white;
  height: 9.5vh;
  max-height: 60px;
  width: 8vw;
  min-width: fit-content;
  border: 1px solid white;
  justify-self: start;
  border-radius: 3px;
`;
