import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useRequestData = (url, inititalState) => {
  const [data, setData] = useState(inititalState);

  const getData = useCallback(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.length === 0) {
          setData(false);
        } else {
          setData(res.data);
        }
      })
      .catch(() => {
        setData(false)
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { data, getData };
};

export default useRequestData;
