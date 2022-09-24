import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosGetPreview() {
  const [data, setData] = useState([]);

  const getPreview = async () => {
    axios
      .all([
        axios.get("/articles/preview/First Article", {
          headers: {},
        }),
        axios.get("/articles/preview/Second Article", {
          headers: {},
        }),
      ])
      .then(
        axios.spread((resp1, resp2) => {
          console.log(resp1, resp2);
          const response = [resp1.data, resp2.data];
          setData(response);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPreview();
  }, []);

  return { data };
  //   return data;
}

export default useAxiosGetPreview;
