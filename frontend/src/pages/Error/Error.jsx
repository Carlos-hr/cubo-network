import Header from "../../components/Header/Header";
import { Button, Container, Img, Main, Text } from "./styled";
import error from "../../assets/error.png";
import { useHistory } from "react-router";
import { goToHome } from "../../routes/coordinator";

const Error = () => {
  const history = useHistory()

  return (
    <Main>
      <Header />
      <Container>
        <Img src={error} alt="Error" />
        <Text>We couldn't find this page :(</Text>
        <Button onClick={() => goToHome(history)}>Voltar</Button>
      </Container>
    </Main>
  );
};

export default Error;
