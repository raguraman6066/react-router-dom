import React from "react";
import SignUpForm from "./SignUpForm";
import { Link, Outlet } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h2>Signup Page</h2>
      <Link to={"signupform"}>SignUpForm</Link>
      <p>...</p>
      <Link to={"loginform"}>LoginForm</Link>
      <Outlet />
    </div>
  );
};

export default SignUp;
