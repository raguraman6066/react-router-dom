import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let newObj = useParams();
  console.log(newObj);
  let navigate = useNavigate();
  function handleNavigate() {
    navigate("/signup");
  }
  return (
    <>
      <div>Login - {newObj.username}</div>
      <button onClick={handleNavigate}>signup</button>
    </>
  );
};

export default Login;
