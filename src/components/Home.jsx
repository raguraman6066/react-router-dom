import React from "react";
import useFetch from "./custom-hook/UseFetch";

const Home = () => {
  let { products, error, isLoading } = useFetch(
    "http://localhost:4000/products"
  );
  return <div>Home - {products.length}</div>;
};

export default Home;
