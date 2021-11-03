import axios from "axios";
import { BASE_URL } from "../constants/url";

export const createPartner = (form, clear, setError) => {
  const { firstname, lastname, participation } = form;
  const numberPart = Number(participation);

  axios
    .post(`${BASE_URL}/partner`, {firstname, lastname, participation: numberPart })
    .then(() => {
      clear()
    })
    .catch(() => {
      setError(true)
    });
};
