import styled from "styled-components";
import { primary } from "../../constants/colors";

export const Title = styled.h1`
  text-align: center;
`;

export const Dashboard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 15vh;

  @media screen and (max-width: 722px) {
    height: fit-content;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  position: absolute;
  width: 90px;
  height: 90px;

  & .path {
    stroke: ${primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
