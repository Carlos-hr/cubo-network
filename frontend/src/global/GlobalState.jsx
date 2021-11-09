import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const { data: partners, getData: getPartners } = useRequestData(
    `${BASE_URL}/partners`,
    null
  );

  const data = { partners, getPartners };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
