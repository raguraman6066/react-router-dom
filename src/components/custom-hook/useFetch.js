import React, { useEffect, useState } from "react";
import axios from "axios";
function useFetch(URL) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let fetchApi = async () => {
      try {
        //  let response = await fetch(URL); //in fetch..we need to convert to json as data..
        let response = await axios.get(URL);
        // if (response.ok) {
        //   let data = await response.json();
        //   setProducts(data);
        // } else {
        //   throw new Error("Data not found!");
        // }
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);
  return { products, error, isLoading };
}

export default useFetch;
