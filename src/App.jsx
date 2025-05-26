import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
function App() {
  let user = "guest";
  return (
    <>
      <Router>
        <nav>
          <ol>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={`/login/${user}`}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>SignUp</Link>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:username" element={<Login />} />
          <Route path="/signup" element={<SignUp />}>
            <Route index element={<SignUpForm />} />
            <Route path="signupform" element={<SignUpForm />} />
            <Route path="loginform" element={<LoginForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
