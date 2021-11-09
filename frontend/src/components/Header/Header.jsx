import { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { createPartner } from "../../services/partner";
import Error from "../Error/Error";
import { Button, ErrorContainer, Form, Input, Main } from "./styled";

const Header = () => {
  const { getPartners } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({
    firstname: "",
    lastname: "",
    participation: "",
  });

  const [error, setError] = useState(false);

  const showError = () => {
    if (error) {
      return <Error />;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createPartner(form, clear, setError, getPartners);
  };

  return (
    // <div>
    <Main>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="First name"
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={onChange}
          required
        />
        <Input
          placeholder="Last name"
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={onChange}
          required
        />
        <Input
          placeholder="Participation"
          type="number"
          name="participation"
          value={form.participation}
          onChange={onChange}
          step="any"
          required
        />
        <Button type="submit">SEND</Button>
      </Form>
      <ErrorContainer>
        {showError()}
      </ErrorContainer>
    </Main>
  );
};

export default Header;
