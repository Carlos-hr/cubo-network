import styled from "styled-components";

export const TableContainer = styled.div`
  padding-left: 10%;

  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
    text-align: start;
    padding-left: 1vw;
    height: 5vh;
    white-space: nowrap;
  }

  th {
    color: dimgray;
    width: fit-content;
    padding-right: 2vw;
  }

  td {
    color: darkgray;
  }

  .part {
    padding-left: 0;
    text-align: center;
  }

  .button {
    cursor: pointer;
    margin-top: 1vh;
  }

  .del {
    text-align: center;
  }

  @media screen and (max-width: 722px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;
