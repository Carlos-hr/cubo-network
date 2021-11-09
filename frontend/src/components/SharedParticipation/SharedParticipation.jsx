import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import ProgressBar from "@ramonak/react-progress-bar";
import { ProgressBarContainer, Title } from "./styled";

const SharedParticipation = () => {
  const { partners } = useContext(GlobalStateContext);
  const rest = partners && partners.reduce((a, b) => a - b.participation, 100);
  const completed = rest ? 100 - rest : 100;
  const title = rest
    ? "Participation available"
    : "There are no partners yet \n Participation available";

  return (
    <div>
      <ProgressBarContainer>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <ProgressBar completed={completed} />
      </ProgressBarContainer>
    </div>
  );
};

export default SharedParticipation;
