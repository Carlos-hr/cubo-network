import { useContext } from "react";
import DonutChart from "../../components/DonutChart/DonutChart";
import Header from "../../components/Header/Header";
import SharedParticipation from "../../components/SharedParticipation/SharedParticipation";
import Table from "../../components/Table/Table";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Dashboard,
  ProgressContainer,
  Title,
  SpinnerContainer,
  StyledSpinner,
} from "./styled";

const Home = () => {
  const { partners } = useContext(GlobalStateContext);
  console.log(partners);
  const renderPage = () => {
    return partners ? (
      <div>
        <Dashboard>
          <Table />
          <DonutChart />
        </Dashboard>
        <ProgressContainer>
          <SharedParticipation />
        </ProgressContainer>
      </div>
    ) : partners === null ? (
      <SpinnerContainer>
        <StyledSpinner viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </StyledSpinner>
      </SpinnerContainer>
    ) : (
      <ProgressContainer>
        <SharedParticipation />
      </ProgressContainer>
    );
  };
  return (
    <div>
      <Header />
      <Title>DATA</Title>
      {renderPage()}
    </div>
  );
};

export default Home;
