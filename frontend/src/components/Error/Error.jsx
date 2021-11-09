import ErrorIcon from "../../assets/ErrorIcon";
import { ErrorContainer, MessageContainer, Text, Title } from "./styled";

const Error = () => {
  return (
    <ErrorContainer>
      <div>
        <ErrorIcon />
      </div>
      <MessageContainer>
        <Title>Error</Title>
        <Text>
          It wasn't possible to add a partner - please check the fields and try
          again.
        </Text>
      </MessageContainer>
    </ErrorContainer>
  );
};

export default Error;
