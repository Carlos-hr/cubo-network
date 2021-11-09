import axios from "axios";
import { BASE_URL } from "../constants/url";

export const createPartner = (form, clear, setError, getPartners) => {
  const { firstname, lastname, participation } = form;
  const numberPart = Number(participation);

  axios
    .post(`${BASE_URL}/partner`, {
      firstname,
      lastname,
      participation: numberPart,
    })
    .then(() => {
      clear();
      getPartners();
      setError(false)
    })
    .catch(() => {
      setError(true);
    });
};

export const deletePartner = (id, setError, getPartners) => {
  axios
    .delete(`${BASE_URL}/partner/${id}`)
    .then(() => {
      getPartners();
      setError(false)
    })
    .catch(() => {
      setError(true);
    });
};
