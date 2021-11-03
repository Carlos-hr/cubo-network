import { useState } from "react";
import useForm from "../../hooks/useForm";
import { createPartner } from "../../services/createPartner";
import { Button, Input, Main } from "./styled";

const Header = () => {
  const [form, onChange, clear] = useForm({
    firstname: "",
    lastname: "",
    participation: "",
  });

  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    createPartner(form, clear, setError);
  };

  const showError = () => {
    if (error) {
      return <div>Erro</div>;
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <Main>
        <Input
          placeholder="First name"
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={onChange}
        />
        <Input
          placeholder="Last name"
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={onChange}
        />
        <Input
          placeholder="Participation"
          type="number"
          name="participation"
          value={form.participation}
          onChange={onChange}
        />
        <Button type="submit">SEND</Button>
      </Main>
      {showError()}
    </form>
  );
};

export default Header;
