import { useState } from "react";

const useForm = (initalState) => {
  const [form, setForm] = useState(initalState);

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initalState);
  };

  return [form, onChange, clear];
};

export default useForm
