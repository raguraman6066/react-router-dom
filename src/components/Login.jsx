import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let newObj = useParams();
  console.log(newObj);
  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <div>Login - {newObj.username}</div>
      <button onClick={handleNavigate}>Products</button>
    </>
  );
};

export default Login;
