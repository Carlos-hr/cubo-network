import { BASE_URL } from "../constants/url"
import useRequestData from "../hooks/useRequestData"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const {data: partners} = useRequestData(`${BASE_URL}/partners`, [])
    const data = {partners}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState