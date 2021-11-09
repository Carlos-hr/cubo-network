import styled from "styled-components";
import { primary } from "../../constants/colors";

export const Main = styled.div`
  height: 23vh;
  width: 100vw;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 10%;
  align-items: center;
  justify-items: center;
  column-gap: 1vw;
`;
export const ErrorContainer = styled.div`
  margin-top: 2vh;
  justify-self: end;
  align-self: center;
  background-color: #f8d7da;
  border-radius: 5px;
  box-shadow: 1px 1px 1px  gray;
  padding-right: 2vw;
  padding-left: 2vw;
  color: maroon;
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
