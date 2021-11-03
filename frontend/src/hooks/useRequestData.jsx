import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useRequestData = (url, inititalState) => {
  const [data, setData] = useState(inititalState);

  const getData = useCallback(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { data, getData };
};

export default useRequestData;
