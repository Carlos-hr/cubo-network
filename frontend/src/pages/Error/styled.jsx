import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 70vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Img = styled.img`
  width: 240px;
`;

export const Text = styled.h2`
  color: dimgray;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: dimgray;
:hover{
    text-decoration: underline dimgray;
}
`;
